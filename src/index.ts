import { Add, Divide, Multiply, Subtract } from 'experiment.typescript-library';

function printMessage(message : string) : void
{
    // tslint:disable-next-line:no-console
    console.log(message);
}

printMessage('4 + 2 = ' + Add(4, 2));
printMessage('4 - 2 = ' + Subtract(4, 2));
printMessage('4 * 2 = ' + Multiply(4, 2));
printMessage('4 / 2 = ' + Divide(4, 2));
