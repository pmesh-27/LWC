({
    handleClick : function(component, event, helper) {
        var payload ={
            message: "Value",
            from: "Value"
        }
        cmp.find("MMC").publish(payload);
    }
})
