//@desc     Get all hospitals
//@route    GET /api/v1/hospitals
//@access   PUBLIC
exports.getHospitals=(req, res, next)=>{
    res.status(200).json({success:200, msg:'Get all hospitals'});
}

//@desc     Get single hospital
//@route    GET /api/v1/hospitals/:id
//@access   PUBLIC
exports.getHospital=(req, res, next)=>{
    res.status(200).json({success:200, msg:`Get hospital ${req.params.id}`});
}

//@desc     Create a hospital
//@route    POST /api/v1/hospitals
//@access   Private
exports.createHospital=(req, res, next)=>{
    res.status(200).json({success:200, msg:'Create a hospitals'});
}

//@desc     Update single hospitals
//@route    PUT /api/v1/hospitals/:id
//@access   Private
exports.updateHospital=(req, res, next)=>{
    res.status(200).json({success:200, msg:`Update hospital ${req.params.id}`});
}

//@desc     Delete single hospital
//@route    DELETE /api/v1/hospitals/:id
//@access   Private
exports.deleteHospital=(req, res, next)=>{
    res.status(200).json({success:200, msg:`Delete hospital ${req.params.id}`});
}