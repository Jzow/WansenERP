/*
 * Copyright 2023-2033 WanSen AI Team, Inc. All Rights Reserved.
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
package com.wansenai.service.user;

import com.wansenai.entities.user.SysUserDeptRel;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 部门用户关系表 服务类
 * </p>
 */
public interface ISysUserDeptRelService extends IService<SysUserDeptRel> {

    List<SysUserDeptRel> queryBatchByUserIds(List<Long> userIds);

    List<SysUserDeptRel> queryByUserId(Long userIds);
}