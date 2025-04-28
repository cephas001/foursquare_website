const jwt = require('jsonwebtoken');

module.exports = {
    async generateSignature(meetingNumber, role) {
        const sdkKey = process.env.ZOOM_SDK_KEY;
        const sdkSecret = process.env.ZOOM_SDK_SECRET;

        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 90 * 60;

        const payload = {
            sdkKey, 
            mn: meetingNumber,
            role,
            iat,
            exp,
            tokenExp: exp
        }

        // Generate the JWT signature
        const signature = jwt.sign(payload, sdkSecret, { algorithm: "HS256"});
        return signature;
    }
};