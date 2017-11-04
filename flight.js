(var Page = (function() {

    
    function ViewModel() {
        var self = this;
        self.arrivals = ko.observableArray([]);
    }

    
    return {
        vm: new ViewModel(),
        hideOfflineWarning: function() {
           
            document.querySelector(".arrivals-list").classList.remove('loading')
       
            document.getElementById("offline").remove();
        
        },
        showOfflineWarning: function() {
     
            document.querySelector(".arrivals-list").classList.add('loading')
            
            var request = new XMLHttpRequest();
            request.open('GET', './offline.html', true);

            request.onload = function() {
                if (request.status === 200) {
               
                 
                    var offlineMessageElement = document.createElement("div");
                    offlineMessageElement.setAttribute("id", "offline");
                    offlineMessageElement.innerHTML = request.responseText;
                    document.getElementById("main").appendChild(offlineMessageElement);
                } else {
                  
                    console.warn('Error retrieving offline.html');
                }
            };

            request.onerror = function() {
               
                console.error('Connection error');
            };

            request.send();
        }
    }

})();
