'use strict';

var ndax = require('./ndax.js');

// Bitazza uses Alphapoint, also used by ndax
//  ---------------------------------------------------------------------------
class bitazza extends ndax {
    describe() {
        return this.deepExtend(super.describe(), {
            'id': 'bitazza',
            'name': 'Bitazza',
            'countries': ['THA'],
            'certified': false,
            'pro': false,
            'urls': {
                'test': undefined,
                'api': {
                    'public': 'https://apexapi.bitazza.com:8443/AP',
                    'private': 'https://apexapi.bitazza.com:8443/AP',
                },
                'www': 'https://bitazza.com/',
                'referral': '',
                'fees': 'https://bitazza.com/fees.html',
                'doc': [
                    'https://api-doc.bitazza.com/',
                ],
            },
            'fees': {
                'trading': {
                    'tierBased': true,
                    'percentage': true,
                    'taker': this.parseNumber('0.0025'),
                    'maker': this.parseNumber('0.0025'),
                },
            },
        });
    }
}

module.exports = bitazza;
