export default {
    selectData: '请选择一条数据',
    modifyDataPrompt: '抱歉，只有未审核的单据才能编辑！',
    regularPrint: '普通打印',
    otherStorage: {
        title: '其他入库列表',
        add: '新增',
        batchDelete: '批量删除',
        addOtherStorage: '新增-其他入库',
        editOtherStorage: '编辑-其他入库',
        detailOtherStorage: '其他入库-详情',
        detailReceipt: '其他入库单单据-详情',
        header: {
            receiptNumber: '单据编号',
            receiptDate: '单据日期',
            starDate: '开始日期',
            endDate: '结束日期',
            supplierName: '供应商',
            operator: '操作员',
            status: '状态',
            remark: '备注',
        },
        table: {
            supplierName: '供应商',
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            productNumber: '数量',
            totalAmount: '金额合计',
            operator: '操作员',
            status: '状态',
            operate: '操作',
        },
        form: {
            supplierName: '供应商',
            inputSupplier: '请选择供应商',
            receiptDate: '单据日期',
            inputReceiptDate: '请选择单据日期',
            receiptNumber: '单据编号',
            inputReceiptNumber: '请输入单据编号',
            scanCodeData: '扫码录入数据',
            collapseScanCode: '收起扫码',
            scanCodeTip: '鼠标点击此次',
            addProduct: '选择添加入库商品',
            insertRow: '添加一行',
            deleteRow: '删除选中行',
            addRowData: '请添加一行数据',
            noticeOne: '请录入条码或者选择产品',
            noticeTwo: '请选择仓库',
            noticeThree: '仓库不能为空',
            noticeFour: '商品条码不能为空',
            noticeFive: '其他入/出库没有金额信息，若需要可自行修改',
            cancel: '取消',
            save: '保存',
            saveApprove: '保存并审核',
            table: {
                warehouse: '仓库',
                inputWarehouse: '请选择仓库',
                barCode: '条码',
                inputBarCode: '输入商品条码',
                name: '名称',
                standard: '规格',
                stock: '库存',
                unit: '单位',
                quantity: '数量',
                unitPrice: '单价',
                amount: '金额',
                remark: '备注',
                total: '合计',
                inputRemark: '请输入备注',
                annex: '附件',
                uploadAnnex: '上传附件',
            }
        },
        view: {
            warehouseName: '仓库名称',
            barCode: '条码',
            productName: '商品名称',
            productStandard: '商品规格',
            productModel: '商品型号',
            productExtendInfo: '扩展信息',
            stock: '库存',
            productUnit: '单位',
            productNumber: '数量',
            unitPrice: '单价',
            amount: '金额',
            remark: '备注',
        },
        export: {
            name: '导出',
            exportData: '其他入库数据 ',
            noData: '无可用数据导出',
        }
    },
    otherShipments: {
        title: '其他出库列表',
        add: '新增',
        batchDelete: '批量删除',
        addOtherShipments: '新增-其他出库',
        editOtherShipments: '编辑-其他出库',
        detailOtherShipments: '其他出库-详情',
        detailReceipt: '其他出库单单据-详情',
        header: {
            receiptNumber: '单据编号',
            receiptDate: '单据日期',
            starDate: '开始日期',
            endDate: '结束日期',
            customer: '客户',
            operator: '操作员',
            status: '状态',
            remark: '备注',
        },
        table: {
            customer: '客户',
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            productNumber: '数量',
            totalAmount: '金额合计',
            operator: '操作员',
            status: '状态',
            operate: '操作',
        },
        form: {
            customer: '客户',
            inputCustomer: '请选择客户',
            receiptDate: '单据日期',
            inputReceiptDate: '请选择单据日期',
            receiptNumber: '单据编号',
            inputReceiptNumber: '请输入单据编号',
            scanCodeData: '扫码录入数据',
            collapseScanCode: '收起扫码',
            scanCodeTip: '鼠标点击此次',
            addProduct: '选择添加入库商品',
            insertRow: '添加一行',
            deleteRow: '删除选中行',
            addRowData: '请添加一行数据',
            noticeOne: '请录入条码或者选择产品',
            noticeTwo: '请选择仓库',
            noticeThree: '仓库不能为空',
            noticeFour: '商品条码不能为空',
            noticeFive: '其他入/出库没有金额信息，若需要可自行修改',
            inputRemark: '请输入备注',
            annex: '附件',
            uploadAnnex: '上传附件',
            cancel: '取消',
            save: '保存',
            saveApprove: '保存并审核',
        },
        export: {
            name: '导出',
            exportData: '其他出库数据 ',
            noData: '无可用数据导出',
        }
    },
    allotShipments: {
        title: '调拨出库列表',
        add: '新增',
        batchDelete: '批量删除',
        addAllotShipments: '新增-调拨出库',
        editAllotShipments: '编辑-调拨出库',
        detailAllotShipments: '调拨出库-详情',
        detailReceipt: '调拨出库单单据-详情',
        header: {
            receiptNumber: '单据编号',
            receiptDate: '单据日期',
            starDate: '开始日期',
            endDate: '结束日期',
            operator: '操作员',
            status: '状态',
            remark: '备注',
        },
        table: {
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            productNumber: '数量',
            operator: '操作员',
            status: '状态',
            operate: '操作',
        },
        form: {
            outWarehouse: '调出仓库',
            inputOutWarehouse: '请选择调出仓库',
            inWarehouse: '调入仓库',
            inputInWarehouse: '请选择调入仓库',
            receiptDate: '单据日期',
            inputReceiptDate: '请选择单据日期',
            receiptNumber: '单据编号',
            inputReceiptNumber: '请输入单据编号',
            scanCodeData: '扫码录入数据',
            collapseScanCode: '收起扫码',
            scanCodeTip: '鼠标点击此次',
            addProduct: '选择添加入库商品',
            insertRow: '添加一行',
            deleteRow: '删除选中行',
            addRowData: '请添加一行数据',
            noticeOne: '请录入条码或者选择产品',
            noticeTwo: '请选择仓库',
            noticeThree: '调出方仓库不能为空',
            noticeFour: '商品条码不能为空',
            noticeFive: '调入方仓库不能为空',
            noticeSex: '输入条码商品信息自动带出！',
            total: '合计',
            inputRemark: '请输入备注',
            annex: '附件',
            uploadAnnex: '上传附件',
            cancel: '取消',
            save: '保存',
            saveApprove: '保存并审核',
            table: {
                outWarehouse: '调出仓库',
                barCode: '条码',
                inputBarCode: '输入商品条码',
                name: '名称',
                standard: '规格',
                model: '型号',
                stock: '库存',
                extendInfo: '扩展信息',
                inWarehouse: '调入仓库',
                unit: '单位',
                quantity: '数量',
                remark: '备注',
            }
        },
        export: {
            name: '导出',
            exportData: '调拨出库数据 ',
            noData: '无可用数据导出',
        }
    },
    assemble: {
        title: '组装单列表',
        add: '新增',
        batchDelete: '批量删除',
        addAssemble: '新增-组装单',
        editAssemble: '编辑-组装单',
        detailAssemble: '组装单-详情',
        detailReceipt: '组装单单据-详情',
        assemblyComponents: '组合件',
        subComponents: '普通子件',
        header: {
            receiptNumber: '单据编号',
            receiptDate: '单据日期',
            starDate: '开始日期',
            endDate: '结束日期',
            operator: '操作员',
            status: '状态',
            remark: '备注',
        },
        table: {
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            productNumber: '数量',
            totalAmount: '金额合计',
            operator: '操作员',
            status: '状态',
        },
        form: {
            receiptDate: '单据日期',
            inputReceiptDate: '请选择单据日期',
            receiptNumber: '单据编号',
            inputReceiptNumber: '请输入单据编号',
            scanCodeData: '扫码录入数据',
            collapseScanCode: '收起扫码',
            scanCodeTip: '鼠标点击此次',
            addProduct: '选择添加入库商品',
            insertRow: '添加一行',
            deleteRow: '删除选中行',
            addRowData: '请添加一行数据',
            noticeOne: '请录入条码或者选择产品',
            noticeTwo: '请选择仓库',
            noticeThree: '仓库不能为空',
            noticeFour: '商品条码不能为空',
            noticeFive: '输入条码商品信息自动带出！',
            cancel: '取消',
            save: '保存',
            saveApprove: '保存并审核',
            table: {
                productType: '商品类型',
                warehouse: '仓库',
                inputWarehouse: '请选择仓库',
                barCode: '条码',
                inputBarCode: '输入商品条码',
                name: '名称',
                standard: '规格',
                stock: '库存',
                unit: '单位',
                quantity: '数量',
                purchasePrice: '采购价',
                amount: '金额',
                remark: '备注',
                total: '合计',
                inputRemark: '请输入备注',
                annex: '附件',
                uploadAnnex: '上传附件',
            }
        },
        view: {
            productType: '商品类型',
            warehouseName: '仓库名称',
            barCode: '条码',
            productName: '商品名称',
            productStandard: '规格',
            productModel: '型号',
            productExtendInfo: '扩展信息',
            stock: '库存',
            productUnit: '单位',
            productNumber: '数量',
            purchasePrice: '采购价',
            amount: '金额',
            remark: '备注',
        },
        export: {
            name: '导出',
            exportData: '组装单数据 ',
            noData: '无可用数据导出',
        }
    },
    disassemble: {
        title: '拆卸单列表',
        add: '新增',
        batchDelete: '批量删除',
        addDisassemble: '新增-拆卸单',
        editDisassemble: '编辑-拆卸单',
        detailDisassemble: '拆卸单-详情',
        detailReceipt: '拆卸单单据-详情',
        header: {
            receiptNumber: '单据编号',
            receiptDate: '单据日期',
            starDate: '开始日期',
            endDate: '结束日期',
            operator: '操作员',
            status: '状态',
            remark: '备注',
        },
        table: {
            receiptNumber: '单据编号',
            productInfo: '商品信息',
            receiptDate: '单据日期',
            productNumber: '数量',
            totalAmount: '金额合计',
            operator: '操作员',
            status: '状态',
        },
        form: {
            receiptDate: '单据日期',
            inputReceiptDate: '请选择单据日期',
            receiptNumber: '单据编号',
            inputReceiptNumber: '请输入单据编号',
            scanCodeData: '扫码录入数据',
            collapseScanCode: '收起扫码',
            scanCodeTip: '鼠标点击此次',
            addProduct: '选择添加商品',
            insertRow: '添加一行',
            deleteRow: '删除选中行',
            addRowData: '请添加一行数据',
            noticeOne: '请录入条码或者选择产品',
            noticeTwo: '请选择仓库',
            noticeThree: '仓库不能为空',
            noticeFour: '商品条码不能为空',
            noticeFive: '输入条码商品信息自动带出！',
            cancel: '取消',
            save: '保存',
            saveApprove: '保存并审核',
            table: {
                productType: '商品类型',
                warehouse: '仓库',
                inputWarehouse: '请选择仓库',
                barCode: '条码',
                inputBarCode: '输入商品条码',
                name: '名称',
                standard: '规格',
                stock: '库存',
                unit: '单位',
                quantity: '数量',
                purchasePrice: '采购价',
                amount: '金额',
                remark: '备注',
                total: '合计',
                inputRemark: '请输入备注',
                annex: '附件',
                uploadAnnex: '上传附件',
            }
        },
        export: {
            name: '导出',
            exportData: '拆卸单数据 ',
            noData: '无可用数据导出',
        }
    }
}