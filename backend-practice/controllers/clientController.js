import Client from "../models/Client.js";

export const createClient =async(req,res)=>{
    try {
   
    const client =await Client.create(req.body);
    res.status(201).json({
        success:true,
        message:"Client created succesfully"
    })
    } catch (error) {
       res.status(500).json({
      success: false,
      message: error.message,
    });
    }
   

}
export const getClients = async (req, res) => {
  try {
    let filter = {};
    const { status, search, sort, page, limit } = req.query;
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
    let sortOptions = { createdAt: -1 };

    if (sort) {
      if (sort.startsWith("-")) {
        sortOptions = {
          [sort.substring(1)]: -1,
        };
      } else {
        sortOptions = {
          [sort]: 1,
        };
      }
    }

    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 5;
    
    const skip= (pageNumber-1)*limitNumber;

    const totalClients =await Client.countDocuments(filter);
    const totalPage = Math.ceil(totalClients/limitNumber);
    const hasNextPage= pageNumber<totalPage;
    const hasPreviousPage= 1<pageNumber;
    const client = await Client.find(filter).sort(sortOptions).skip(skip).limit(limitNumber);
    res.status(200).json({
      success: true,
      count:client.length,
      data: client,
      totalClients,
      hasNextPage,
      hasPreviousPage,
      totalPage,
      currentPage:pageNumber
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClientById=async(req,res)=>{
    try {
        const client =await Client.findById(req.params.id)
        if(!client){
            return res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }

        res.status(200).json({
            success:true,
            data:client,
            message:"Client fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

export const updateClient=async(req,res)=>{
    try {
        const client =await Client.findByIdAndUpdate(req.params.id , req.body,{
            new:true,
            runValidators:true
        })

        if(!client){
            return res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }
         res.status(200).json({
            success:true,
            data:client,
            message:"Client updated"
        })
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}
export const deleteClient=async(req,res)=>{
    try {
        const client= await Client.findByIdAndDelete(req.params.id)
        if(!client){
             return res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }
         res.status(200).json({
            success:true,
            data:client,
            message:"Client deleted"
        })
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}