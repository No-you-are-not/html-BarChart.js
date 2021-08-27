class ChartSettings {

    // Important
    depth;
    data;

    // Additional
    convertToTime = false;
    needMediana = true;

    constructor(data,depth = 1)
    {
        this.data = data;
        this.depth = depth;
    }
}

export default ChartSettings;