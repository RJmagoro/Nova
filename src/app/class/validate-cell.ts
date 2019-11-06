export class ValidateCell {
    validateCell(cell: string) {
        if (cell.substr(0, 1) == "0" && cell.length == 10) {
            if (
                cell.substr(0, 3) == "060" ||
                cell.substr(0, 3) == "061" ||
                cell.substr(0, 3) == "062" ||
                cell.substr(0, 3) == "063" ||
                cell.substr(0, 3) == "071" ||
                cell.substr(0, 3) == "072" ||
                cell.substr(0, 3) == "073" ||
                cell.substr(0, 3) == "074" ||
                cell.substr(0, 3) == "075" ||
                cell.substr(0, 3) == "076" ||
                cell.substr(0, 3) == "077" ||
                cell.substr(0, 3) == "078" ||
                cell.substr(0, 3) == "079" ||
                cell.substr(0, 3) == "081" ||
                cell.substr(0, 3) == "082" ||
                cell.substr(0, 3) == "083" ||
                cell.substr(0, 3) == "084"
            ) {
                return true;
            } else {
                return false;
            }
        } else if (cell.substr(0, 2) == "27" && cell.length == 11) {
            let num = 0 + cell.substr(2, 2);
            if (
                num == "060" ||
                num == "061" ||
                num == "062" ||
                num == "063" ||
                num == "071" ||
                num == "072" ||
                num == "073" ||
                num == "074" ||
                num == "075" ||
                num == "076" ||
                num == "077" ||
                num == "078" ||
                num == "079" ||
                num == "081" ||
                num == "082" ||
                num == "083" ||
                num == "084"
            ) {
                return true;
            } else {
                return false;
            }
        } else if (cell.substr(0, 3) == "+27" && cell.length == 12) {
            let num = 0 + cell.substr(3, 2);
            if (
                num == "060" ||
                num == "061" ||
                num == "062" ||
                num == "063" ||
                num == "071" ||
                num == "072" ||
                num == "073" ||
                num == "074" ||
                num == "075" ||
                num == "076" ||
                num == "077" ||
                num == "078" ||
                num == "079" ||
                num == "081" ||
                num == "082" ||
                num == "083" ||
                num == "084"
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
