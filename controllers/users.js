const User = require("../models/userModel");

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateData = { ...req.body };

  const updatedUser = await User.findByIdAndUpdate( userId , updateData);

  if (!updatedUser) {
    return res.status(404).json({
      status: 404,
      message: "User not found",
    });
  }

  return res.status(200).json({
    status: 200,
    data: { data: updatedUser, message: "User updated successfully" },
  });
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const deletedUser = await User.findByIdAndDelete( userId );

  if (!deletedUser) {
    return res.status(404).json({
      status: 404,
      message: "User not found",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "User deleted successfully",
    data: deletedUser,
  });
};

const viewUser = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById( userId );

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "User not found",
    });
  }

  return res.status(200).json({
    status: 200,
    data: { data: user, message: "User found successfully" },
  });
};

const viewAllUsers = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json({
    status: 200,
    data: { data: users, message: "Users found successfully" },
  });
};

module.exports = {
  updateUser,
  deleteUser,
  viewUser,
  viewAllUsers,
};
