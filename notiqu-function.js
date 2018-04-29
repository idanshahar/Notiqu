module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    context.bidingDate.name



    var message = {
    body: context.bidingDate.name
    };
    serviceBusService.sendQueueMessage('myqueue', message, function(error){
    if(!error){
        // message sent
    }
});



    context.done();
};