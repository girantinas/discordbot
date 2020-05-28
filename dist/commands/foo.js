"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooCommand = void 0;
const EECSCommand_1 = require("../EECSCommand");
class FooCommand extends EECSCommand_1.default {
    constructor(client) {
        super(client, {
            name: 'foo',
            group: 'misc',
            memberName: 'foo',
            description: 'foo test command',
            hidden: true,
            throttleTime: 5,
        });
    }
    execute(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return message.reply('bar');
        });
    }
}
exports.FooCommand = FooCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Zvby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0M7QUFHeEMsTUFBYSxVQUFXLFNBQVEscUJBQVc7SUFDdkMsWUFBWSxNQUFzQjtRQUM5QixLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsQ0FBQztTQUNsQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUssT0FBTyxDQUFDLE9BQXdCOztZQUNsQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsQ0FBQztLQUFBO0NBQ0o7QUFmRCxnQ0FlQyJ9