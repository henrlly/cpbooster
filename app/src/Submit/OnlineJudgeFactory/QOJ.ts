/*
    cpbooster "Competitive Programming Booster"
    Copyright (C) 2023  user202729

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { OnlineJudgeName } from "../../Config/Types/OnlineJudgeName";
import UniversalOJGeneric from "./UniversalOJGeneric";

export default class QOJ extends UniversalOJGeneric {
  readonly onlineJudgeName = OnlineJudgeName.qoj;
  readonly loginUrl = "https://qoj.ac/login";
}
