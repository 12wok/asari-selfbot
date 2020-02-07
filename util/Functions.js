module.exports = class Functions {

    static sleep(delay) {
        let start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }


    static randomString(length) {

        let str = "";
        let letters = "abcdefghlmnopqrstwvus"

        for(let i = 0; i < length; i++) {

            str += letters.charAt(Math.floor(Math.random() * letters.length))

        }

        return str;
        


    }


}