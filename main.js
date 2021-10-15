export const isOddNumber = (number) => number % 2 === 1;

export const checkPrice = function(productType, newRate) {
    if (productType === 'Điện Thoại') {
        if (newRate == 100) {
            return 100;
        }
        else if (newRate >= 80 && newRate <= 89) {
            return 70;
        }
        else if (newRate >= 90 && newRate <= 99) {
            return 80;
        }
        else if (newRate >= 0 && newRate < 80) {
            return 'Không bán được!';
        }
        else {
            return 'Input không hợp lệ!'
        }
    }

    else if (productType === 'Máy Tính') {
        if (newRate == 100) {
            return 100;
        }
        else if (newRate >= 80 && newRate <= 89) {
            return 80;
        }
        else if (newRate >= 90 && newRate <= 99) {
            return 85;
        }
        else if (newRate >= 0 && newRate < 80) {
            return 'Không bán được!';
        }
        else {
            return 'Input không hợp lệ!'
        }
    }
    
    else {
        return 'Input không hợp lệ!';
    }
}
