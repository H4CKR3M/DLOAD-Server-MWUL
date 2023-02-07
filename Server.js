var SERVER = {
    DLOAD_VERSION: 1,
    MAP_VERSION: 1,
    DAILIES: [],
    INIT: function INIT(){
        DLoad.TS.Msg("&cDownloading Soundtrack from the server &e(&6&l193mb&e)&c... Please &4&lDO NOT&e quit game!");
        DLoad.DownloadContent("https://dl.dropboxusercontent.com/s/g94z5ptu9v6rmm2/Soundtrack.zip");
    }
}
