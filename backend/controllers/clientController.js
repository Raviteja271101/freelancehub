import Client from "../models/Client.js";

export const createClient = async (req, res) => {
  try {
    const client = await Client.create({ ...req.body, user: req.user._id });

    res.status(201).json({
      success: true,
      message: "Client created successfully",
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClients = async (req, res) => {
  try {
    const { status, sort, search, page, limit } = req.query;
    let filter = {};

    filter.user = req.user._id;

    if (status) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          company: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    let sortOption = { createdAt: -1 };
    if (sort) {
      if (sort.startsWith("-")) {
        sortOption = {
          [sort.substring(1)]: -1, //ex: if sortOption= -company then it will become sortOPtion=company *-
        };
      } else {
        sortOption = {
          [sort]: 1, //ex: if sortOption= company then it will become sortOPtion=company
        };
      }
    }

    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const totalClients = await Client.countDocuments(filter);
    const totalPages = Math.ceil(totalClients / limitNumber);
    const hasPreviousPage = 1 < pageNumber;
    const hasNextPage = pageNumber < totalPages;

    const clients = await Client.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json({
      success: true,
      count: clients.length,
      totalClients: totalClients,
      TotalPages: totalPages,
      currentPage: pageNumber,
      previousPage: hasPreviousPage,
      nextPage: hasNextPage,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }
    res.status(200).json({
      success: true,
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await Client.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }
    res.status(200).json({
      success: true,
      data: client,
      message: "Client Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }
    res.status(200).json({
      success: true,
      data: client,
      message: "Client Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
