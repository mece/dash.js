class AdapterMock {
    constructor() {
        this.metricsList = {
            BUFFER_STATE: 'BUFFER_STATE'
        };
    }

    getEventsFor() {
        return null;
    }

    getAllMediaInfoForType() {
        return [{codec: 'audio/mp4;codecs="mp4a.40.2"', id: undefined, index: 0, isText: false, lang: 'eng',mimeType: 'audio/mp4', roles: ['main']},
                {codec: 'audio/mp4;codecs="mp4a.40.2"', id: undefined, index: 1, isText: false, lang: 'deu',mimeType: 'audio/mp4', roles: ['main']}];
    }

    getDataForMedia() {
        return {};
    }

    getMediaInfoForType() {
        return {};
    }

    getFragmentRequest() {
        return {startTime: 0,
                duration: 2};
    }

    setIndexHandlerTime () {
    }

    getStreamsInfo() {
        return [];
    }

    getAdaptationForType() {
        return {
            Representation: [
                {
                    width: 500
                },
                {
                    width: 750
                },
                {
                    width: 900
                }
            ]
        };
    }
}

export default AdapterMock;