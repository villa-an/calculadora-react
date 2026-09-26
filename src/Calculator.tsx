import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <section className="calculator" aria-label="Calculadora">
      <Display value={input || "0"} />

      <div className="keypad grid grid-cols-4 gap-2" aria-label="Teclado de operaciones">
        <Button label="C" ariaLabel="Borrar todo" onClick={clear} className="calc-key--clear" />
        <Button label="(" ariaLabel="Abrir paréntesis" onClick={() => handleClick("(")} className="calc-key--utility" />
        <Button label=")" ariaLabel="Cerrar paréntesis" onClick={() => handleClick(")")} className="calc-key--utility" />
        <Button label="÷" ariaLabel="Dividir" onClick={() => handleClick("/")} className="calc-key--operator" />

        <Button label="7" onClick={() => handleClick("7")} />
        <Button label="8" onClick={() => handleClick("8")} />
        <Button label="9" onClick={() => handleClick("9")} />
        <Button label="×" ariaLabel="Multiplicar" onClick={() => handleClick("*")} className="calc-key--operator" />

        <Button label="4" onClick={() => handleClick("4")} />
        <Button label="5" onClick={() => handleClick("5")} />
        <Button label="6" onClick={() => handleClick("6")} />
        <Button label="−" ariaLabel="Restar" onClick={() => handleClick("-")} className="calc-key--operator" />

        <Button label="1" onClick={() => handleClick("1")} />
        <Button label="2" onClick={() => handleClick("2")} />
        <Button label="3" onClick={() => handleClick("3")} />
        <Button label="+" ariaLabel="Sumar" onClick={() => handleClick("+")} className="calc-key--operator" />

        <Button label="0" onClick={() => handleClick("0")} className="calc-key--zero col-span-2" />
        <Button label="." ariaLabel="Punto decimal" onClick={() => handleClick(".")} />
        <Button label="=" ariaLabel="Calcular resultado" onClick={calculate} className="calc-key--equals" />
      </div>
    </section>
  );
};

export default Calculator;
