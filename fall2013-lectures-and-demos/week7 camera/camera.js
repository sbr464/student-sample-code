$(function(){
    var video = $('video')[0];
    var canvas = $('canvas')[0];

    var getCameraAccess = function(){
        //request camera acces 
        navigator.webkitGetUserMedia(
          {video: true, audio : true}, // Options
            function(localMediaStream) { // Success
                // create an object URL and assign it to the source of our video element
                video.src = window.webkitURL.createObjectURL(localMediaStream);
            },
            function(err) { // Failure
                console.log('getUserMedia failed: Code ' + err.code);
            }
        );
    };

    var takeSnapshot = function(){
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        //add the same filter to our canvas
        canvas.style.webkitFilter = filter;
        canvas.getContext('2d').drawImage(video, 0, 0);
    };

    var addFilter = function(value){

        var filters = [
            'blur('+value+'px)',
            'grayscale('+value+')',
            'sepia('+value+')',
            'saturate('+value+')',
            'brightness('+value+')',
            'contrast('+value+')',
            'hue-rotate('+value+'deg)',
            'invert('+value+')',
            ''
        ];

        //randomly select a filter
        filter = filters[3]
        
        //add the filter to our video element
        video.style.webkitFilter = filter;
    };

    // EVENTS

    // when the start button is clicked, take a snapshot
    $('#snapshot').on('click', function(){
        takeSnapshot();
    });

    // when the start button is clicked, take a snapshot
    $('#filter').on('click', function(){
        addFilter();
    });

    setInterval(function(){
        addFilter(Math.floor(Math.random() * 1000))
    }, 100)

     getCameraAccess();
});