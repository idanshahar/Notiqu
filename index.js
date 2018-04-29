var azure = require('azure');

module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    context.bidingDate.name
    var azure = require('azure');
    var serviceBusService = azure.createServiceBusService();

    serviceBusService.createQueueIfNotExists('myqueue', function(error){
        if(!error){
            context.log('could create queue');
            // Queue exists
        }
    });
      
    var message = {
        body: context.bidingDate.name
    };

    context.log('sending message '+ context.bidingDate.name)

    serviceBusService.sendQueueMessage('myqueue', message, function(error){
        if(!error){
            context.log('failed sending message '+ context.bidingDate.name)
        }
    });


    context.done();
};