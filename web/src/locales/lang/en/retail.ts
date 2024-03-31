export default {
    selectData: 'Please select a piece of data',
    modifyDataPrompt: 'Sorry, only unapproved documents can be edited!',
    regularPrint: 'Print',
    shipments:{
        title: 'Retail Shipments List',
        addShipments: 'Add - Retail Shipments',
        editShipments: 'Edit - Retail Shipments',
        detail: 'Retail Shipments - Detail',
        receipt: 'Retail Shipments Detail',
        table:{
            member: 'Member',
            receiptNumber: 'Receipt number',
            productInformation: 'Product information',
            productQuantity: 'Product quantity',
            totalAmount: 'Total amount',
            amountCollection: 'Amount collection',
            changeAmount: 'Change amount',
            receiptDate: 'Receipt date',
            operator: 'operator',
            status: 'status',
        },
        header:{
            settlementAccount: 'Account',
            startDate: 'Start date',
            endDate: 'End date',
            receiptRemark: 'receipt remark',
        },
        export: {
            name: 'Export',
            exportData: 'Retail Shipments Data ',
            noData: 'No available data export',
        },
        form: {
            member: 'Member',
            inputMember: 'Please select member',
            addMember: 'Add member',
            receiptDate: 'Receipt date',
            inputReceiptDate: 'Please select receipt date',
            receiptNumber: 'Receipt number',
            collectionType: 'Collection type',
            inputCollectionType: 'Please select collection type',
            scanCodeData: 'Scan code to enter data',
            collapseScanCode: 'Collapse scan code',
            scanCodeTip: 'Click here with the mouse',
            addProduct: 'Select to add product',
            insertRow: 'Insert A Row',
            deleteRow: 'Delete Selected Rows',
            addRowData: 'Please add a row of data',
            inputBarCode: 'Please enter the product barcode',
            noticeOne: 'Please select warehouse',
            noticeTwo: 'Please enter barcode or select product',
            noticeThree: 'Need to add products in product management',
            noticeFour: 'Are you sure you want to delete the selected data?',
            noticeFive: 'The file exceeds the 2MB size limit',
            noticeSix: 'The barcode cannot find product info',
            noticeSeven: 'Insufficient inventory of goods, please check the inventory quantity',
            advancePayment: 'Advance payment',
            cashPayment: 'Cash payment',
            cancel: 'Cancel',
            save: 'Save',
            saveApprove: 'Save and Approve',
            table: {
                warehouse: 'Warehouse',
                inputWarehouse: 'Please select a warehouse',
                barCode: 'Barcode',
                inputBarCode: 'Please enter product barcode',
                name: 'Name',
                standard: 'Standard',
                model: 'Model',
                color: 'Color',
                stock: 'Stock',
                unit: 'Unit',
                quantity: 'Quantity',
                unitPrice: 'Unit price',
                amount: 'Amount',
                total: 'Total',
                inputRemark: 'Please enter remark',
                annex: 'Attachment',
                uploadAnnex: 'Upload attachment',
            }
        },
        view: {
            member: 'Member',
            receiptDate: 'Receipt date',
            collectionType: 'Collection type',
            receiptAmount: 'Amount',
            collectionAmount: 'Collection',
            changeAmount: 'Return',
            collectionAccount: 'Account',
            inputCollectionAccount: 'Please select collection account',
            addAccount: 'Add account',
            refundReceipt: 'Return receipt',
            remark: 'Remark',
            status: 'Status',
        }
    },
    refund:{
        title: 'Retail Return List',
        addRefund: 'Add - Retail Return',
        editRefund: 'Edit - Retail Return',
        detail: 'Retail Return - Detail',
        receipt: 'Retail Return Detail',
        table:{
            member: 'Member',
            receiptNumber: 'Receipt number',
            productInformation: 'Product information',
            totalAmount: 'Total amount',
            paymentAmount: 'Payment amount',
            changeAmount: 'Change amount',
            receiptDate: 'Receipt date',
            operator: 'operator',
            status: 'status',
        },
        header:{
            settlementAccount: 'Account',
            startDate: 'Start date',
            endDate: 'End date',
            receiptRemark: 'receipt remark',
        },
        export: {
            name: 'Export',
            exportData: 'Retail Return Data ',
            noData: 'No available data export',
        },
        form: {
            member: 'Member',
            inputMember: 'Please select member',
            addMember: 'Add member',
            receiptDate: 'Receipt date',
            inputReceiptDate: 'Please select receipt date',
            receiptNumber: 'Receipt number',
            relatedReceipt: 'Related receipt',
            scanCodeData: 'Scan code to enter data',
            collapseScanCode: 'Collapse scan code',
            scanCodeTip: 'Click here with the mouse',
            addProduct: 'Select to return product',
            insertRow: 'Insert A Row',
            deleteRow: 'Delete Selected Rows',
            addRowData: 'Please add a row of data',
            noticeOne: 'Please select warehouse',
            noticeTwo: 'Please enter barcode or select product',
            noticeThree: 'Need to add products in product management',
            noticeFour: 'Are you sure you want to delete the selected data?',
            noticeFive: 'The file exceeds the 2MB size limit',
            noticeSix: 'The barcode cannot find product info',
            cancel: 'Cancel',
            save: 'Save',
            saveApprove: 'Save and Approve',
            table: {
                warehouse: 'Warehouse',
                inputWarehouse: 'Please select a warehouse',
                barCode: 'Barcode',
                inputBarCode: 'Please enter product barcode',
                name: 'Name',
                standard: 'Standard',
                model: 'Model',
                color: 'Color',
                stock: 'Stock',
                unit: 'Unit',
                quantity: 'Quantity',
                unitPrice: 'Unit price',
                amount: 'Amount',
                total: 'Total',
                inputRemark: 'Please enter remark',
                annex: 'Attachment',
                uploadAnnex: 'Upload attachment',
            }
        },
        view: {
            member: 'Member',
            receiptDate: 'Receipt date',
            receiptAmount: 'Amount',
            paymentAmount: 'Payment',
            changeAmount: 'Return',
            paymentAccount: 'Account',
            inputPaymentAccount: 'please select payment account',
            relatedReceipt: 'Related receipt',
            addAccount: 'Add account',
            remark: 'Remark',
            status: 'Status',
        }
    }
};