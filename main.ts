/**
 * BLE Command Processor
 */
//% color=#0fbc11 icon="\uf113"
namespace BLECommandProcessor {
    /**
     * Expand BLE command string
     * @param s BLE command string to expand
     * @param startChar Start character of the loop
     * @param endChar End character of the loop
     */
    //% block="expand command $s "
    export function expandCommand(s: string): string {
        return loopAdd(s, '5', '6');
    }

    loopAdd(s: string, startChar: string, endChar: string): string {
        let result: string[] = [];
        let i: number = 0;

        while (i < s.length) {
            if (s.charAt(i) === startChar) {
                result.push(startChar);
                i += 1;
                let repeatChar: string = s.charAt(i);
                i += 1;
                let startIndex: number = i;

                while (i < s.length && s.charAt(i) !== endChar) {
                    i += 1;
                }

                if (i < s.length && s.charAt(i) === endChar) {  // endChar found
                    let repeatCount: number = 1;
                    switch (repeatChar) {
                        case 'c':
                            repeatCount = 2;
                            break;
                        case 'd':
                            repeatCount = 3;
                            break;
                        case 'e':
                            repeatCount = 4;
                            break;
                        case 'f':
                            repeatCount = 5;
                            break;
                        default:
                            break;
                    }
                    let substring: string = s.substr(startIndex, i - startIndex);
                    for (let j = 0; j < repeatCount; j++) {
                        result.push(substring);
                    }
                    result.push(endChar);
                }
            } else {
                result.push(s.charAt(i));
            }
            i += 1;
        }

        return result.join('');
    }
}