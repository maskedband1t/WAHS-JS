<script src="/scripts/jwplayer-7.3.4/jwplayer.js"></script>
<script>
    jwplayer.key = "B8wNKZYTgMvMlefcin5goLHjfSbDo2HuP8N9Lw=="
    var livePlayer = jwplayer('live-player')

    $(function() {
        livePlayer.setup({
            autostart:true,
            title: "WAHS Live",
            sources: [
                {
                    file: 'http://vid4.cdncoop.com:1935/redirect/51277/loadbalancer.smil?assets=ese51277Stream_160p,ese51277Stream_240p,ese51277Stream_360p,ese51277Stream_720p&bitrates=200000,350000,500000,1300000'
                },
                {
                    file: 'http://live.cdncoop.com/51277/ese51277Stream_360p/playlist.m3u8'
                }
            ],

            width: "100%",
            aspectratio: "16:9"
        })

        var analytics = new LiveVideoAnalytics(livePlayer, 'Live Event Player')
    })

    function LiveVideoAnalytics(player, playerName) {
        var lastVideoTitle = ""
        s.Media.playerName = playerName

        function getCurrentVideo() {
            return player.getPlaylist()[player.getPlaylistIndex()]
        }

        function getCurrentTitle() {
            var video = getCurrentVideo()
            return video.title + " Live"
        }

        player.on("pause", function() {
            var currentTitle = getCurrentTitle()
            console.log("pause: " + currentTitle + ", position: " + player.getPosition())
            s.Media.stop(currentTitle, player.getPosition())
        })
        player.on("buffer", function() {
            var currentTitle = getCurrentTitle()
            console.log("buffer: " + currentTitle + ", position: " + player.getPosition())
            s.Media.stop(currentTitle, player.getPosition())
        })
        player.on("idle", function() {
            var currentTitle = getCurrentTitle()
            console.log("idle: " + currentTitle + ", position: " + player.getPosition())
            //s.Media.stop(currentTitle, player.getPosition())
        })
        // complete occurs when live stream is stopped by encoder
        player.on("complete", function() {
            var currentTitle = getCurrentTitle()
            console.log("complete: " + currentTitle + ", position: " + player.getPosition())
            s.Media.close(currentTitle)
        })
        player.on("play", function() {
            var currentTitle = getCurrentTitle()
            var currentPosition = player.getPosition()
            var currentDuration = player.getDuration()
            console.log("play: " + currentTitle + ", position: " + currentPosition + ", duration: " + currentDuration)

            if (lastVideoTitle != currentTitle)
                s.Media.open(currentTitle, currentDuration, playerName)
            lastVideoTitle = currentTitle
            s.Media.play(currentTitle, currentPosition)
        })
        player.on("error", function(e) {
            console.log("JWPlayer error")
        })
    }
</script>
