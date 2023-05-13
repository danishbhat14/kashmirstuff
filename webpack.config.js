import path from 'path';

export const resolve = {
    fallback: {
        buffer: require.resolve('buffer/'),
        net: require.resolve('net'),
        tls: require.resolve('tls'),
        assert: require.resolve('assert/'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
    },
};
