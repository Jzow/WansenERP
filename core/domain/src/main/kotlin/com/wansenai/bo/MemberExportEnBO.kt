/*
 * Copyright 2024-2033 WanSen AI Team, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 * with the License. A copy of the License is located at
 *
 * http://opensource.wansenai.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
package com.wansenai.bo

import com.wansenai.NoArg
import com.wansenai.utils.excel.ExcelExport
import lombok.Data
import java.math.BigDecimal
import java.time.LocalDateTime

@NoArg
@Data
data class MemberExportEnBO(

    var id: Long?,

    @ExcelExport(value = "Member Number", sort = 1)
    var memberNumber: String?,

    @ExcelExport(value = "Member", sort = 2)
    var memberName: String?,

    @ExcelExport(value = "Phone Number", sort = 3)
    var phoneNumber: String?,

    @ExcelExport(value = "Email", sort = 4)
    var email: String?,

    @ExcelExport(value = "Advance Payment", sort = 5)
    var advancePayment: BigDecimal?,

    @ExcelExport(value = "Status", kv="0-Enable;1-Deactivate", sort = 6)
    var status: Int?,

    @ExcelExport(value = "Remark", sort = 7)
    var remark: String?,

    var sort: Int?,

    var createTime: LocalDateTime?,
)
