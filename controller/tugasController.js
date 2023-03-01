const mongoose = require("mongoose");
const tugasModel = mongoose.model("tugas");

exports.createTugas = async (req, res) => {
    console.info(`sedang lakukan create tugas`)
    tugasModel(req.body).save((err) => {
    if (err) {
    	    res.status(400).json({
                message: 'failed create data!',
                error: err
            })
    	}
    	else {
    		res.status(200).json({ message: 'created successfully!' })
    	}
    
    })
};

exports.findAllTugas = async (req, res) => {
    console.info(`sedang lakukan find all data`)
    const findAll = await tugasModel.find()
    if (findAll[0] === undefined) {
        res.status(400).json({ message: 'no data found!' });
    }
    else {
        res.status(200).json(findAll);
    }
}

exports.findTugas = async (req, res) => {
    console.info(`sedang lakukan find id ${req.params.id}`)
    const checkTugas = await tugasModel.find({"_id": req.params.id})
    if (checkTugas[0] === undefined) {
        res.status(200).json({ message: 'data not found!' });
    }
    else {
        res.status(200).json(checkTugas);
    }
}

exports.deleteTugas = async (req, res) => {
    console.info(`sedang lakukan delete id ${req.params.id}`)
    checkDelete = await tugasModel.deleteOne({ _id: req.params.id })
    console.info(checkDelete)
    if (checkDelete.deletedCount === 0) {
        res.status(400).json({ message: 'failed delete data!' });
    }
    else {
        res.status(200).json({ message: `data with id ${req.params.id} deleted succesfully!` });
    }
}

exports.updateTugas = async (req, res) => {
    console.info(`sedang lakukan update id ${req.params.id}`)
    const checkTugas = await tugasModel.find({"_id": req.params.id})
    if (checkTugas[0] === undefined) {
        res.status(400).json({ message: 'data not found, cannot update data!' });
    }
    else {
        tugasModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, docs) => {
                if (!err) {
                    res.status(200).json({ message: `data with id ${req.params.id} edited succesfully!`, 
                                            updated: [{...req.params,...req.body}]});
                } else {
                    res.status(400).json({ message: 'failed edit data!' });
                }
            })
    }
}