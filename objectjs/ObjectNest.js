var mobile = {
    name: "Apple",
    LaunchYear: 2020,
    Processor: "A14",
    model: {
        modelName : "Iphone 12"
    }
};

console.log(mobile.model.modelName);

mobile.model.newModelname = "Iphone SE";

console.log(mobile.model["newModelname"]);