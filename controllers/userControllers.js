const User = require("../functions/User");
const Post = require("../functions/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Follow = require("../functions/Follow");
const { default: mongoose } = require("mongoose");

const getUserDict = (token, user) => {
  return {
    token,
    username: user.username,
    userId: user._id,
    isAdmin: user.isAdmin,
  };
};

const buildToken = (user) => {
  return {
    userId: user._id,
    isAdmin: user.isAdmin,
  };
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      throw new Error("All input required");
    }

    const normalizedEmail = email.toLowerCase();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({
      $or: [{ email: normalizedEmail }, { username }],
    });

    if (existingUser) {
      throw new Error("Email and username must be unique");
    }

    const user = await User.create({
      username,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY);

    return res.json(getUserDict(token, user));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      throw new Error("All input required");
    }

    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Email or password incorrect");
    }

    const token = jwt.sign(buildToken(user), process.env.TOKEN_KEY);

    return res.json(getUserDict(token, user));
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

const follow = async (req, res) => {
  try {
    const { userId } = req.body;
    const followingId = req.params.id;

    const existingFollow = await Follow.find({ userId, followingId });

    if (existingFollow) {
      throw new Error("Already following this user");
    }

    const follow = await Follow.create({ userId, followingId });

    return res.status(200).json({ data: follow });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, biography } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }

    if (typeof biography == "string") {
      user.biography = biography;
    }

    await user.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const unfollow = async (req, res) => {
  try {
    const { userId } = req.body;
    const followingId = req.params.id;

    const existingFollow = await Follow.find({ userId, followingId });

    if (!existingFollow) {
      throw new Error("Not already following user");
    }

    await existingFollow.remove();

    return res.status(200).json({ data: existingFollow });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getFollowers = async (req, res) => {
  try {
    const userId = req.params.id;

    const followers = await Follow.find({ followingId: userId });

    return res.status(200).json({ data: followers });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getFollowing = async (req, res) => {
  try {
    const userId = req.params.id;

    const following = await Follow.find({ userId });

    return res.status(200).json({ data: following });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      throw new Error("User does not exist");
    }

    const posts = await Post.find({ poster: user._id })
      .populate("poster")
      .sort("-createdAt");

    const data = {
      user,
      posts: {
        count: posts.length,
        data: posts,
      },
    };

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getRandomUsers = async (req, res) => {
  try {
    let { size } = req.query;

    const users = await User.find().select("-password");

    const randomUsers = [];

    if (size > users.length) {
      size = users.length;
    }

    const randomIndices = getRandomIndices(size, users.length);

    for (let i = 0; i < randomIndices.length; i++) {
      const randomUser = users[randomIndices[i]];
      randomUsers.push(randomUser);
    }

    return res.status(200).json(randomUsers);
  } catch (error) {
    
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

const getRandomIndices = (size, sourceSize) => {
  const randomIndices = [];
  while (randomIndices.length < size) {
    const randomNumber = Math.floor(Math.random() * sourceSize);
    if (!randomIndices.includes(randomNumber)) {
      randomIndices.push(randomNumber);
    }
  }
  return randomIndices;
};

module.exports = {
  register,
  login,
  follow,
  unfollow,
  getFollowers,
  getFollowing,
  getUser,
  getRandomUsers,
  updateUser,
};
