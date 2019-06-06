export const assignNumbers = formula => formula.replace(
    /#+/g,
    (n) => Math.floor(Math.random() * Math.pow(10, n.length))
);

export const evaluate = equation => {
    equation = removeSpaces(equation);

    let beforeRound;
    do {
        beforeRound = equation;
        equation = parenthesis(equation);
        equation = pow(equation);
        equation = mul(equation);
        equation = div(equation);
        equation = add(equation);
        equation = sub(equation);
    } while (isNaN(equation) || equation !== beforeRound);
    return equation;
};

const removeSpaces = input => input.replace(
    / /g,
    ''
);

const parenthesis = equation => equation.replace(
    /\((\d+)\)/g,
    (_, n) => n
);

const pow = equation => equation.replace(
    /(\d+)\^(\d+)/g,
    (_, a, b) => String(Math.pow(a, b))
);

const mul = equation => equation.replace(
    /(\d+)[×·*](\d+)/g,
    (_, a, b) => String(a * b)
);

const div = equation => equation.replace(
    /(\d+)[÷/](\d+)/g,
    (_, a, b) => b === '0' ? 'NaN' : String(a / b)
);

const add = equation => equation.replace(
    /(\d+)[+](\d+)/g,
    (_, a, b) => String(+a + +b)
);

const sub = equation => equation.replace(
    /(\d+)[-−](\d+)/g,
    (_, a, b) => String(a - b)
);
