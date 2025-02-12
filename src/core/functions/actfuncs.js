/*
 * Activation functions
 */
let activations = {
  // Basic
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  },
  sigmoid_d(x) {
    let x1 = 1 / (1 + Math.exp(-x));
    return x1 * (1 - x1);
  },
  siLU(x) {
    return x / (1 + Math.exp(-x));
  },
  siLU_d(x) {
    let top = 1 + Math.exp(-x) + x * Math.exp(-x);
    let down = Math.pow(1 + Math.exp(-x), 2);
    return top / down;
  },
  tanH(x) {
    let top = Math.exp(x) - Math.exp(-x);
    let down = Math.exp(x) + Math.exp(-x);
    return top / down;
  },
  tanH_d(x) {
    let numer = Math.pow(Math.exp(2 * x) - 1, 2);
    let denom = Math.pow(Math.exp(2 * x) + 1, 2);
    return 1 - numer / denom;
  },
  leakyReLU(x) {
    return Math.max(x, x * 0.01);
  },
  leakyReLU_d(x) {
    if (x >= 0) {
      return 1;
    } else {
      return 0.01;
    }
  },
  reLU(x) {
    return Math.max(x, 0);
  },
  reLU_d(x) {
    if (x >= 0) {
      return 1;
    } else {
      return 0;
    }
  },
  sinc(x) {
    if (x === 0) {
      return 1;
    } else {
      return Math.sin(x) / x;
    }
  },
  sinc_d(x) {
    if (x === 0) {
      return 0;
    } else {
      return Math.cos(x) / x - Math.sin(x) / (x * x);
    }
  },
  softsign(x) {
    return x / (1 + Math.abs(x));
  },
  softsign_d(x) {
    let down = 1 + Math.abs(x);
    return 1 / (down * down);
  },
  binary(x) {
    if (x <= 0) {
      return 0;
    } else {
      return 1;
    }
  },
  binary_d(x) {
    return 0;
  },
  softplus(x) {
    return Math.log(1 + Math.exp(x));
  },
  softplus_d(x) {
    return this.sigmoid(x);
  },
  // Experimental
  leakyReLUCapped(x) {
    if (x >= 0 && x <= 6) {
      return x;
    } else if (x < 0) {
      return 0.1 * x;
    } else {
      return 6;
    }
  },
  leakyReLUCapped_d(x) {
    if (x >= 0 && x <= 6) {
      return 1;
    } else if (x < 0) {
      return 0.1;
    } else {
      return 0;
    }
  },
  leakySigmoid(x) {
    return 1 / (1 + Math.exp(-x)) + x / 100;
  },
  leakySigmoid_d(x) {
    let x1 = leakySigmoid(x);
    return x1 * (1 - x1);
  },
};
