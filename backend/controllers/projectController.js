import Client from "../models/Client.js";
import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const client = await Client.findOne({
      _id: req.body.client,
      user: req.user._id,
    });
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }
    const project = await Project.create({
      ...req.body,
      client: client._id,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const { status, search, sort, page, limit } = req.query;
    let filter = {
      user: req.user._id,
    };

    if (status) {
      filter.status = status;
    }
    if (search) {
      filter.$or = [
        {
          projectName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
        // {
        //   deadline: {
        //     $regex: search,
        //     $options: "i",
        //   },
        // },
      ];
    }
    let sortOption = { createdAt: -1 };

    if (sort) {
      if (sort.startsWith("-")) {
        sortOption = {
          [sort.substring(1)]: -1,
        };
      } else {
        sortOption = {
          [sort]: 1,
        };
      }
    }

    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 5;
    const skip = (pageNumber - 1) * limitNumber;
    const totalProjects = await Project.countDocuments(filter);
    const totalPages = Math.ceil(totalProjects / limitNumber);
    const hasNextPage = pageNumber < totalPages;
    const hasPreviousPage = pageNumber > 1;
    const projects = await Project.find(filter)
      .populate("client", "name company")
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);
    res.status(200).json({
      success: true,
      message: "Fetched Project success",
      hasNextPage,
      hasPreviousPage,
      totalPages,
      currentPage: pageNumber,
      totalProjects,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("client","name company");
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        user: req.user._id,
        _id: req.params.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!project) {
      return res.status(400).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({  _id:req.params.id,user:req.user._id });
    if(!project){
        return res.status(400).json({
      success: false,
      message: "Project not found"
    });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data:project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
