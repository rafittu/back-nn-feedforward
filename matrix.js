class Matrix {
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
    
        this.data = [];

        for (let i = 0; i < rows; i++) {
            let arr = [];
            for (let j = 0; j < cols; j++) {
                arr.push(Math.floor(Math.random() * 10));
            }
            this.data.push(arr);
        }
    }

    randomize() {
        this.map((elm, i, j) => {
            return Math.random() * 2 - 1;
        })
    }

    map(func) {
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return this;
    }

    static add(A, B) {
        var matrix = newMatrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.daya[i][j] + B.data[i][j]
        });

        return matrix;
    }

    static multiply(A, B) {
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0;

            for(let k = 0; k < B.rows; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j] ;
                sum += elm1 * elm2;
            }
            return sum;
        })

        return matrix;
    }
}