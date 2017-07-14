import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Test #1', () =>{
    it('Should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say JSPractice', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("JSPractice");
            done();
            window.close();
        });
    });
});
