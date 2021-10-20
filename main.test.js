import {checkPrice} from './main.js'
const expect = chai.expect;

//Input không hợp lệ!
//Không bán được!
describe('Kiểm tra function checkPrice() với bảng quyết định', () => {
    // Check cho điện thoại.
    it('should be "Input không hợp lệ!" if Điện Thoại và > 100%', () => {
        const result = checkPrice('Điện Thoại', 101);
        expect(result).to.equal('Input không hợp lệ!');
        // expect(result).to.equal();
    });
    
    it('should be 100 if Điện Thoại và 100%', () => {
        const result = checkPrice('Điện Thoại', 100);
        expect(result).to.equal(100);
        // expect(result).to.equal();
    });
    
    it('should be 80 if Điện Thoại và 90%<= newRate <= 99%', () => {
        const result = checkPrice('Điện Thoại', 92);
        expect(result).to.equal(80);
        // expect(result).to.equal();
    });

    it('should be 70 if Điện Thoại và 80%<= newRate <= 89%', () => {
        const result = checkPrice('Điện Thoại', 82);
        expect(result).to.equal(70);
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Điện Thoại và 0% <= newRate < 80%', () => {
        const result = checkPrice('Điện Thoại', 55);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    // Check cho máy tính.
    
    it('should be 100 if Máy Tính và 100%', () => {
        const result = checkPrice('Máy Tính', 100);
        expect(result).to.equal(100);
        // expect(result).to.equal();
    });
    
    it('should be 80 if Máy Tính và 90%<= newRate <= 99%', () => {
        const result = checkPrice('Máy Tính', 92);
        expect(result).to.equal(85);
        // expect(result).to.equal();
    });

    it('should be 70 if Máy Tính và 80%<= newRate <= 89%', () => {
        const result = checkPrice('Máy Tính', 82);
        expect(result).to.equal(80);
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Máy Tính và 0% <= newRate < 80%', () => {
        const result = checkPrice('Máy Tính', 55);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be "Input không hợp lệ!" if productType không hợp lệ và newRate > 100% hoặc newRate < 0% hoặc là kiểu float', () => {
        const result = checkPrice('Iphone', 100);
        expect(result).to.equal('Input không hợp lệ!');
        // expect(result).to.equal();
    });

    it('should be "Input không hợp lệ!" if productType không hợp lệ hoặc newRate > 100% hoặc newRate < 0% hoặc là kiểu float', () => {
        const result = checkPrice('Điện Thoại', 102);
        expect(result).to.equal('Input không hợp lệ!');
        // expect(result).to.equal();
    });
});

describe('Kiểm tra function checkPrice() với trường hợp xấu nhất', () => {
    // Check cho điện thoại.
    it('should be 100 if Điện Thoại và 100%', () => {
        const result = checkPrice('Điện Thoại', 100);
        expect(result).to.equal(100);
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Điện Thoại và newRate == 0', () => {
        const result = checkPrice('Điện Thoại', 0);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Điện Thoại và newRate == 50', () => {
        const result = checkPrice('Điện Thoại', 50);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Điện Thoại và newRate == 1', () => {
        const result = checkPrice('Điện Thoại', 0);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be 80 if Điện Thoại và newRate == 99', () => {
        const result = checkPrice('Điện Thoại', 99);
        expect(result).to.equal(80);
        // expect(result).to.equal();
    });

    // Check cho máy tính

    it('should be 100 if Máy Tính và 100%', () => {
        const result = checkPrice('Máy Tính', 100);
        expect(result).to.equal(100);
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Máy Tính và newRate == 0', () => {
        const result = checkPrice('Máy Tính', 0);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Máy Tính và newRate == 50', () => {
        const result = checkPrice('Máy Tính', 50);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be "Không bán được!" if Máy Tính và newRate == 1', () => {
        const result = checkPrice('Máy Tính', 0);
        expect(result).to.equal('Không bán được!');
        // expect(result).to.equal();
    });

    it('should be 85 if Máy Tính và newRate == 99', () => {
        const result = checkPrice('Máy Tính', 99);
        expect(result).to.equal(85);
        // expect(result).to.equal();
    });
});







