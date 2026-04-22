// Olivine ERP — Full Menu Tree for TC Generator Explorer
// Structure: App > Module Group > Screen (leaf)
// Leaf nodes have: id, label, path, subtitle, storyDesc
// storyDesc is pre-filled into the TC Generator description field

const TC_MENU = [
    {
        id: 'platform', label: 'Platform',
        children: [
            {
                id: 'administration', label: 'System Administration',
                children: [
                    {
                        id: 'user-management', label: 'User Management', path: '/admin/users', subtitle: 'Manage user accounts and roles',
                        storyDesc: 'As an administrator, I want to manage user accounts so that the right people have the right access.\n- View user list with search and role filter\n- Create user: Name, Email, Role, Location assignment\n- Edit user details and role\n- Activate/Deactivate user\n- Reset password\n- Prevent delete if user has transactions\n- Keyboard shortcuts: F2=New, F8=Save, ESC=Cancel'
                    },
                    {
                        id: 'bdd-generator', label: 'BDD Generator', path: '/tc-generator.html', subtitle: 'Gemini-powered BDD designer',
                        storyDesc: 'As a quality engineer, I want to use the BDD Generator so that I can create BDD scenarios from UI screenshots or descriptions.\n- Upload wireframe screenshots\n- Enter screen description and story\n- Generate BDD scenarios with Gemini AI\n- Save scenarios directly to the project folder'
                    },
                    {
                        id: 'layout-settings', label: 'Layout Settings', path: '/admin/layout-settings', subtitle: 'Configure layout and appearance',
                        storyDesc: 'As an administrator, I want to configure the application layout so that modules are shown or hidden per deployment.\n- Toggle visibility of modules (Retail, Finance, CRM, HR)\n- Set default landing page\n- Configure sidebar options for Test Console\n- Save and apply layout changes'
                    },
                    {
                        id: 'security', label: 'Security Settings', path: '/admin/security', subtitle: 'System security configurations',
                        storyDesc: 'As an administrator, I want to configure security settings so that the system is protected.\n- Set password policy (min length, complexity, expiry)\n- Configure session timeout\n- Enable/disable two-factor authentication\n- View active sessions and force logout'
                    },
                    {
                        id: 'audit-logs', label: 'Audit Logs', path: '/admin/audit', subtitle: 'User activity auditing',
                        storyDesc: 'As an administrator, I want to view audit logs so that I can track all user actions in the system.\n- View log list with date range, user, and action type filters\n- View log detail: user, timestamp, action, before/after values\n- Export logs to CSV\n- Logs are read-only (no edit/delete)'
                    },
                    {
                        id: 'POS_BUSINESS_RULES', label: 'POS Business Rules', path: '/pos/business-rules', subtitle: 'Vertical config & flags',
                        storyDesc: 'As an administrator, I want to configure POS business rules so that checkout behavior matches store policy.\n- Enable/disable loyalty points at POS\n- Set maximum discount percentage per role\n- Configure payment methods allowed\n- Set bill hold limit\n- Enable/disable price override at POS'
                    },
                    {
                        id: 'TEST_CONSOLE', label: 'Test Console', path: '/test-console', subtitle: 'Permission prototyping',
                        storyDesc: 'As a system administrator, I want to access the Test Console so that I can prototype and validate permission structures.\n- Select user role to emulate\n- Verify navigation access for selected role\n- View applied permission policies\n- Test dynamic menu generation'
                    },
                ]
            },
            {
                id: 'system-tools', label: 'System Tools',
                children: [
                    {
                        id: 'file-search', label: 'File Search Explorer', path: '/admin/file-search', subtitle: 'Search within codebase',
                        storyDesc: 'As a developer, I want to search files in the codebase so that I can quickly locate components and configurations.\n- Search by filename or content\n- Filter by file extension\n- View file path and preview\n- Open file in editor'
                    },
                    {
                        id: 'backup', label: 'Backup & Recovery', path: '/admin/backup', subtitle: 'Data backup and restore',
                        storyDesc: 'As a system administrator, I want to manage system backups so that we can recover from data loss.\n- Schedule automated database backups\n- Perform manual on-demand backup\n- View backup history and integrity status\n- Restore from previous backup'
                    },
                    {
                        id: 'visual-extractor', label: 'Visual Extractor', path: '/system-tools/visual-extractor', subtitle: 'OCR image to markdown text',
                        storyDesc: 'As a QA engineer, I want to extract text from screenshots so that I can document UI content quickly.\n- Upload image (PNG/JPG/PDF)\n- Extract text via OCR\n- Copy extracted text as markdown\n- Download as .md file'
                    },
                    {
                        id: 'dataops-studio', label: 'DataOps Studio', path: '/system-tools/dataops-studio', subtitle: 'Database exploration & queries',
                        storyDesc: 'As a developer, I want to run database queries so that I can inspect and validate data.\n- Connect to configured database\n- Write and execute SQL queries\n- View results in table format\n- Export results to CSV'
                    },
                    {
                        id: 'web-console', label: 'Web Console', path: '/system-tools/web-console', subtitle: 'Embedded web browser',
                        storyDesc: 'As a developer, I want an embedded web console so that I can access web-based tools without leaving the platform.\n- Load external URLs in an iframe\n- Save frequently visited tool URLs\n- Integrated console for web inspections'
                    },
                    {
                        id: 'tc-generator', label: 'AI TC Generator', path: '/tc-generator.html', subtitle: 'Generate test cases with Gemini AI',
                        storyDesc: 'As a quality engineer, I want the AI TC Generator tool so that I can automate test case creation.\n- Context-aware generation using Gemini API\n- Export test cases to markdown index\n- Version control for generated test suites'
                    },
                    {
                        id: 'html-preview', label: 'HTML Preview Tool', path: '/system-tools/html-preview', subtitle: 'Wireframe source inspector',
                        storyDesc: 'As a developer, I want to preview HTML files so that I can inspect wireframes and prototypes.\n- Load HTML file from disk or URL\n- Toggle between rendered and source view\n- Resize preview viewport\n- Inspect element on click'
                    },
                    {
                        id: 'wireframe-launchpad', label: 'Wireframe Launchpad', path: '/system-tools/wireframe-launchpad', subtitle: 'Quick screen navigation',
                        storyDesc: 'As a QA engineer, I want to quickly navigate to any screen so that I can test without clicking through menus.\n- View all screens as a grid\n- Search by screen name\n- Click to navigate directly\n- Filter by module'
                    },
                ]
            }
        ]
    },

    {
        id: 'retail', label: 'Retail Workspace',
        children: [
            { id: 'RETAIL_NOW', label: 'Retail Now', path: '/', subtitle: 'Industry news & trends', storyDesc: 'As a retail manager, I want to see a curated feed of industry news and trends so that I stay informed.\n- View retail industry news aggregated from sources\n- View trending products and categories\n- View competitor price alerts\n- Customize news feed preferences' },
            { id: 'TODAY', label: 'Today', path: '/retail/dashboard', subtitle: "Today's overview", storyDesc: "As a store manager, I want to see today's key metrics so that I can monitor daily performance.\n- View today's sales total vs target\n- View active POS sessions\n- View low stock alerts\n- View pending orders and deliveries\n- View top-selling items today" },
            {
                id: 'pos', label: 'Counter (POS)',
                children: [
                    {
                        id: 'pos-checkout', label: 'Checkout', path: '/pos/ui', subtitle: 'POS checkout interface',
                        storyDesc: 'As a cashier, I want to process customer bills at the POS counter so that I can collect payment and issue receipts.\n- Open POS session and load checkout screen\n- Add items by barcode scan or item search by name/code\n- Apply item-level discount (percentage or fixed amount)\n- Apply bill-level discount\n- Select payment method: Cash, Card, UPI, Split payment\n- Process cash payment with change calculation\n- Apply loyalty points redemption\n- Hold bill and retrieve held bills\n- Cancel/void a transaction with reason\n- Print receipt after successful payment\n- Handle item not found scenario\n- Handle insufficient stock scenario\n- Keyboard shortcuts: F2=New Bill, F8=Pay, ESC=Cancel'
                    },
                    {
                        id: 'POS_DAY_OPEN', label: 'Open Day', path: '/operations/pos/day-open', subtitle: 'Opening store day operations',
                        storyDesc: 'As a store manager, I want to open the store day so that cashiers can start processing transactions.\n- View current day status (Open/Closed)\n- Select store/location for day open\n- Enter opening cash balance per denomination\n- Confirm and submit day open\n- Prevent duplicate day open if already open\n- View day open history'
                    },
                    {
                        id: 'POS_SESSION_OPEN', label: 'Start Shift', path: '/operations/pos/session-open', subtitle: 'Start cashier shift',
                        storyDesc: 'As a cashier, I want to start my shift so that I can begin processing sales at my assigned terminal.\n- Select terminal from available list\n- Enter opening float amount\n- Confirm session start\n- Prevent session open if day is not open\n- Prevent duplicate session on same terminal'
                    },
                    {
                        id: 'POS_SESSION_CLOSE', label: 'End Shift', path: '/operations/pos/session-close', subtitle: 'End cashier shift',
                        storyDesc: 'As a cashier, I want to close my shift so that my cash is reconciled and the terminal is freed.\n- View session summary: total sales, cash, card, UPI\n- Enter closing cash count per denomination\n- View cash variance (expected vs actual)\n- Submit session close with remarks if variance exists\n- Prevent close if there are open/held bills'
                    },
                    {
                        id: 'POS_DAY_CLOSE', label: 'Close Day', path: '/operations/pos/day-close', subtitle: 'Store closing operations',
                        storyDesc: 'As a store manager, I want to close the store day so that daily financials are locked.\n- View all session summaries for the day\n- Confirm all sessions are closed before day close\n- Submit day close\n- Prevent day close if any session is still open\n- View day close summary report'
                    },
                    {
                        id: 'POS_SETTLEMENT', label: 'Cash Desk', path: '/operations/pos/settlement', subtitle: 'End of day settlements',
                        storyDesc: 'As a store manager, I want to perform end-of-day cash settlement so that cash is reconciled against system totals.\n- View expected cash by terminal\n- Enter actual cash counted per denomination\n- Submit settlement with variance notes\n- Export settlement report'
                    },
                    {
                        id: 'POS_TERMINAL_CONFIGURATION', label: 'Terminals', path: '/pos/terminal', subtitle: 'Terminal configuration',
                        storyDesc: 'As an administrator, I want to configure POS terminals so that cashiers can be assigned to specific counters.\n- View list of terminals with status\n- Create terminal: Code, Name, Location, Printer settings\n- Edit terminal details\n- Activate/Deactivate terminal\n- Assign default payment methods to terminal'
                    },
                    {
                        id: 'POS_BUSINESS_RULES', label: 'Business Rules', path: '/pos/business-rules', subtitle: 'Vertical config & flags',
                        storyDesc: 'As an administrator, I want to configure POS business rules so that checkout behavior matches store policy.\n- Enable/disable loyalty points at POS\n- Set maximum discount percentage per role\n- Configure allowed payment methods\n- Set bill hold limit\n- Enable/disable price override at POS'
                    },
                ]
            },
            {
                id: 'sales', label: 'Sales Flow',
                children: [
                    {
                        id: 'QUOTES', label: 'Quotations', path: '/sales/quotes', subtitle: 'Quotation management',
                        storyDesc: 'As a sales executive, I want to create quotations for customers so that they can review pricing before placing an order.\n- View list of quotations with search and status filter\n- Create quotation: select customer, add items, apply discounts\n- Set validity date\n- Print/email quotation to customer\n- Convert quotation to sales order\n- Cancel quotation with reason'
                    },
                    {
                        id: 'ORDERS', label: 'Orders', path: '/sales/orders', subtitle: 'Order processing',
                        storyDesc: 'As a sales executive, I want to create and manage sales orders so that customer demand is captured and fulfilled.\n- View order list with search, date range, and status filters\n- Create order: customer, delivery date, items, quantities, prices\n- Apply order-level and item-level discounts\n- Approve order (if approval workflow enabled)\n- Cancel order with reason\n- View order fulfillment status'
                    },
                    {
                        id: 'INVOICES', label: 'Billing', path: '/sales/invoices', subtitle: 'Billing and invoicing',
                        storyDesc: 'As a billing executive, I want to generate invoices from sales orders so that customers are billed accurately.\n- View invoice list with search and status filter\n- Create invoice from sales order (auto-populate)\n- Apply tax based on tax configuration\n- Print/email invoice\n- Record payment against invoice\n- View outstanding invoices'
                    },
                    {
                        id: 'RETURNS', label: 'Returns', path: '/sales/returns', subtitle: 'Manage returns and refunds',
                        storyDesc: 'As a sales executive, I want to process customer returns so that stock is restocked and refunds are issued.\n- Create return against an invoice\n- Select items and quantities to return\n- Select return reason\n- Choose refund method: cash, credit note, exchange\n- Update stock on return confirmation\n- Generate credit note'
                    },
                    {
                        id: 'sales-config', label: 'Sales Settings', path: '/sales/configuration', subtitle: 'Sales rules and approvals',
                        storyDesc: 'As an administrator, I want to configure sales rules so that the sales process follows business policies.\n- Set order approval threshold (auto-approve below amount)\n- Configure default payment terms\n- Set discount limits per role\n- Enable/disable quotation module\n- Set invoice numbering sequence'
                    },
                ]
            },
            {
                id: 'master-data', label: 'Assortment',
                children: [
                    {
                        id: 'ITEM_MASTER', label: 'Items', path: '/inventory/item-master', subtitle: 'Product list',
                        storyDesc: 'As a merchandising manager, I want to define and manage product records so that items are available for sales and inventory transactions.\n- View item list with search by code/name and filter by category, status\n- Create item: Item Code, Name, Category, Base UOM, Selling Price (mandatory)\n- Additional tabs: Pricing, Inventory (Reorder levels), Tracking (Batch/Serial), Attributes\n- Edit existing item details\n- Duplicate item code validation\n- Delete item (soft delete) with confirmation\n- Prevent delete if item has transactions\n- Enable batch tracking toggle\n- UOM conversion setup (e.g., 1 BOX = 12 PCS)\n- Keyboard shortcuts: F2=New, F8=Save, F3=Edit, F4=Delete, ESC=Cancel'
                    },
                    {
                        id: 'ATTRIBUTE_DEFINITIONS', label: 'Attribute Definitions', path: '/inventory/attributes', subtitle: 'Product attribute configurations',
                        storyDesc: 'As a merchandising manager, I want to define product attributes (Color, Size, Material) so that items can be classified and filtered.\n- View list of attribute definitions\n- Create attribute: Name, Data Type (Text/Number/List), Required flag\n- Edit attribute name and type\n- Deactivate attribute (cannot delete if in use)\n- View which items use an attribute'
                    },
                    {
                        id: 'ATTRIBUTE_VALUES', label: 'Attribute Values', path: '/inventory/attribute-values', subtitle: 'Manage attribute values',
                        storyDesc: 'As a merchandising manager, I want to manage the allowed values for list-type attributes so that data entry is consistent.\n- View values grouped by attribute\n- Add new value to an attribute\n- Edit value label\n- Deactivate value\n- Prevent duplicate values within same attribute'
                    },
                    {
                        id: 'ATTRIBUTE_TEMPLATES', label: 'Attribute Templates', path: '/inventory/attribute-templates', subtitle: 'Templates for attributes',
                        storyDesc: 'As a merchandising manager, I want to create attribute templates so that a set of attributes can be applied to a product category at once.\n- Create template: Name, assign attributes (multi-select)\n- Edit template — add/remove attributes\n- Assign template to item category\n- View items using a template'
                    },
                    {
                        id: 'PRICE_LIST_MASTER', label: 'Price Lists', path: '/inventory/price-lists', subtitle: 'Pricing and discounts',
                        storyDesc: 'As a pricing manager, I want to create and manage price lists so that items are sold at the correct prices.\n- View list of price lists with status filter\n- Create price list: Name, Currency, Effective Date, Expiry Date\n- Add items to price list with selling price\n- Set price list as default for a customer group\n- Deactivate expired price lists'
                    },
                    {
                        id: 'CODE_MASTERS', label: 'Categories & Brands', path: '/setup/simple-masters', subtitle: 'Category and Brand management',
                        storyDesc: 'As an administrator, I want to manage product categories and brands so that items are properly classified.\n- View category hierarchy (tree structure)\n- Create parent and child categories\n- Edit category name and parent\n- Deactivate category (prevent if items assigned)\n- Create brand: Name, Description\n- Edit and deactivate brands'
                    },
                    {
                        id: 'UOM', label: 'Units of Measure', path: '/inventory/uoms', subtitle: 'Measurement units',
                        storyDesc: 'As an administrator, I want to define units of measure so that items can be bought and sold in different units.\n- View list of UOMs\n- Create UOM: Code, Name, Type (Weight/Volume/Count/Length)\n- Define conversion: 1 BOX = 12 PCS\n- Edit UOM details\n- Deactivate UOM (prevent if in use)'
                    },
                    {
                        id: 'CATEGORIES', label: 'Category Hierarchy', path: '/inventory/categories', subtitle: 'Manage category tree',
                        storyDesc: 'As a merchandising manager, I want to view and manage the full product category tree so that stock can be analyzed by category.\n- View full category tree with item counts\n- Expand/collapse tree nodes\n- Move category to different parent\n- View items in a category\n- Export category list'
                    },
                ]
            },
            {
                id: 'inventory', label: 'Stockroom',
                children: [
                    // --- Stock Overview ---
                    {
                        id: 'inventory-dashboard', label: 'Stock Overview',
                        children: [
                            { id: 'STOCK_PULSE_LIVE', label: 'Stock Pulse', path: '/inventory/dashboard', subtitle: 'Stock summary and KPIs', storyDesc: 'As a store manager, I want to view a stock dashboard so that I can see inventory KPIs at a glance.\n- View total stock value, item count, low stock alerts\n- View stock by category chart\n- View top 10 low stock items\n- Filter by location\n- Refresh data on demand' },
                            { id: 'STOCK_BY_LOCATION_LIVE', label: 'Stock by Location', path: '/inventory/stock-by-location', subtitle: 'Location-wise stock', storyDesc: 'As a store manager, I want to view stock distribution by location so that I can assess inventory balance.\n- View stock quantity and value per location\n- Compare locations side by side\n- Highlight understocked locations\n- Drill down to item level per location' },
                            { id: 'STOCK_VALUATION_LIVE', label: 'Stock Valuation', path: '/inventory/stock-valuation', subtitle: 'FIFO/LIFO/Weighted Avg', storyDesc: 'As a finance manager, I want to view stock valuation summary so that I can track inventory as an asset.\n- View total stock value by valuation method\n- View value by category and location\n- View value trend over time\n- Compare valuation methods' },
                            { id: 'MOVEMENT_SPEED_LIVE', label: 'Movement Speed', path: '/inventory/movement-trends', subtitle: 'Movement analytics', storyDesc: 'As a store manager, I want to view stock movement trends so that I can identify velocity changes.\n- View inbound vs outbound movement rate\n- View movement trend chart\n- Identify items with sudden velocity change\n- Filter by category and period' },
                            { id: 'STOCK_ALERTS_LIVE', label: 'Stock Alerts', path: '/inventory/alerts', subtitle: 'Low stock and overstock alerts', storyDesc: 'As a store manager, I want to view stock alerts so that I can take proactive action.\n- View low stock alerts with severity\n- View overstock alerts\n- View expiry alerts for perishables\n- Set custom alert thresholds\n- Acknowledge or dismiss alerts' },
                        ]
                    },
                    // --- Stock Management ---
                    {
                        id: 'stock-management', label: 'Stock Management',
                        children: [
                            { id: 'STOCK_ALL', label: 'Stock on Hand', path: '/inventory/levels', subtitle: 'All items stock levels', storyDesc: 'As a store manager, I want to view current stock levels so that I can make informed purchasing and sales decisions.\n- View stock list with search by item code/name\n- Filter by category, location, status (In Stock/Low Stock/Out of Stock)\n- View quantity on hand, reserved, available\n- Drill down to batch/serial level\n- Export stock report to CSV/Excel' },
                            { id: 'STOCK_BY_LOCATION_LIVE', label: 'Stock by Location', path: '/inventory/stock-by-location', subtitle: 'Location filter', storyDesc: 'As a warehouse manager, I want to view stock filtered by location so that I can manage specific warehouse inventory.\n- Select location from dropdown\n- View all items at selected location\n- View quantity on hand, reserved, available\n- Export location-specific stock report' },
                            { id: 'STOCK_CATEGORY', label: 'Stock by Category', path: '/inventory/stock-by-category', subtitle: 'Category filter', storyDesc: 'As a merchandising manager, I want to view stock by category so that I can analyze category-level inventory.\n- Select category from hierarchy\n- View items in selected category with stock levels\n- View category total quantity and value\n- Compare subcategories' },
                            { id: 'CATEGORIES', label: 'Category Hierarchy', path: '/inventory/categories', subtitle: 'Manage category tree', storyDesc: 'As a merchandising manager, I want to manage the product category tree so that stock can be organized.\n- View full category tree with item counts\n- Expand/collapse tree nodes\n- Move category to different parent\n- View items in a category\n- Export category list' },
                            { id: 'STOCK_BATCH', label: 'Stock by Batch/Serial', path: '/inventory/stock-by-batch-serial', subtitle: 'Batch/serial tracking', storyDesc: 'As a warehouse manager, I want to view stock by batch and serial number so that I can track specific units.\n- View stock grouped by batch number\n- View serial number list with status\n- Filter by expiry date range\n- View batch movement history\n- Export batch/serial report' },
                            { id: 'LOW_STOCK_ALERTS', label: 'Low Stock Alerts', path: '/inventory/alerts/low-stock', subtitle: 'Reorder alerts', storyDesc: 'As a store manager, I want to view items below reorder level so that I can initiate replenishment.\n- View items below reorder point\n- View suggested reorder quantity\n- Sort by severity (critical/warning)\n- Create purchase requisition from alert\n- Export alert list' },
                            { id: 'OVERSTOCK_ALERTS', label: 'Overstock Alerts', path: '/inventory/alerts/overstock', subtitle: 'Excess stock', storyDesc: 'As a store manager, I want to identify overstocked items so that I can reduce carrying costs.\n- View items above maximum level\n- View excess quantity and value\n- View days of stock on hand\n- Suggest clearance or transfer actions\n- Export overstock report' },
                            { id: 'STOCK_AGING_REPORT', label: 'Stock Aging Analysis', path: '/inventory/aging-analysis', subtitle: 'Age-based analysis', storyDesc: 'As a store manager, I want to view stock aging so that I can identify slow-moving inventory.\n- View aging buckets: 0-30, 31-60, 61-90, 90+ days\n- Filter by category and location\n- View value at risk for aging stock\n- Highlight items nearing expiry\n- Export aging report' },
                            { id: 'SYSTEM_GO_LIVE', label: 'System Go-Live', path: '/inventory/system-go-live', subtitle: 'Opening stock entry', storyDesc: 'As an administrator or store manager, I want to execute a system go-live sequence so that opening stock can be initialized.\n- View system go-live status (Pre-Go-Live, Active, Post-Go-Live)\n- Add opening stock entries manually or via bulk upload\n- Verify and approve opening stock entries\n- Activate or complete system go-live state' },
                        ]
                    },
                    // --- Stock Activity ---
                    {
                        id: 'stock-movements', label: 'Stock Activity',
                        children: [
                            { id: 'MOVEMENT_HISTORY', label: 'Movement History', path: '/inventory/movements', subtitle: 'All movements', storyDesc: 'As a warehouse manager, I want to view all stock movements so that I can audit inventory changes.\n- View movement list with date range filter\n- Filter by movement type: GRN, Sale, Adjustment, Transfer\n- View item, quantity, from/to location\n- View before and after quantities\n- Export movement log' },
                            { id: 'GOODS_RECEIPT', label: 'Receiving (View)', path: '/inventory/goods-receipt-view', subtitle: 'GRN impact (read-only)', storyDesc: 'As a warehouse manager, I want to view goods receipt impact on stock so that I can verify incoming deliveries.\n- View GRN list with date and PO reference\n- View items received with quantities\n- View stock impact (before/after)\n- View batch/serial numbers assigned\n- Read-only view (GRN created from Supply Flow)' },
                            { id: 'GOODS_ISSUE', label: 'Dispatch (View)', path: '/inventory/goods-issue-view', subtitle: 'Sales impact (read-only)', storyDesc: 'As a warehouse manager, I want to view goods dispatched and their stock impact.\n- View dispatch list with date and order reference\n- View items dispatched with quantities\n- View stock impact (before/after)\n- View delivery status\n- Read-only view (dispatch triggered from Sales)' },
                            { id: 'INTERNAL_TRANSFERS', label: 'Moves', path: '/inventory/transfers', subtitle: 'Inter-location transfers', storyDesc: 'As a warehouse manager, I want to transfer stock between locations so that inventory is distributed correctly.\n- Create transfer: From Location, To Location, items and quantities\n- Validate stock availability at source\n- Submit transfer for approval (if required)\n- Confirm dispatch from source\n- Confirm receipt at destination\n- Partial receipts are supported' },
                            { id: 'INTERCOMPANY_TRANSFERS', label: 'Intercompany Moves', path: '/inventory/intercompany', subtitle: 'Inter-company transfers', storyDesc: 'As a warehouse manager, I want to transfer stock between companies so that group inventory is optimized.\n- Create inter-company transfer: source company/location to target company/location\n- Set transfer pricing (cost/market)\n- Generate corresponding entries in both companies\n- Track shipment between companies\n- View inter-company transfer history' },
                            { id: 'MOVEMENT_REPORT', label: 'Movement Reports', path: '/inventory/movement-reports', subtitle: 'Export movement data', storyDesc: 'As a warehouse manager, I want to export movement reports so that I can analyze stock flow.\n- Filter by date range, item, location, movement type\n- View summary or detailed format\n- Group by item, location, or movement type\n- Export to CSV/Excel' },
                        ]
                    },
                    // --- Corrections ---
                    {
                        id: 'stock-adjustments', label: 'Corrections',
                        children: [
                            { id: 'STOCK_ADJUSTMENTS', label: 'Adjust Stock', path: '/inventory/adjustments/new', subtitle: 'Create stock adjustments', storyDesc: 'As a warehouse manager, I want to create stock adjustments so that system quantities match physical counts.\n- Create adjustment: select location, items, adjustment type (Add/Remove)\n- Enter quantity and reason code\n- Attach supporting document (optional)\n- Submit for approval (if approval required)\n- View adjustment summary before submit' },
                            { id: 'ADJUSTMENT_HISTORY', label: 'Adjustment History', path: '/inventory/adjustments/history', subtitle: 'All adjustments', storyDesc: 'As a warehouse manager, I want to view adjustment history so that I can audit all corrections.\n- View all adjustments with date range filter\n- Filter by status: Draft, Pending, Approved, Rejected\n- View adjustment detail: items, quantities, reasons\n- View approval/rejection comments\n- Export history' },
                            { id: 'REASON_CODES', label: 'Reason Codes', path: '/inventory/adjustments/reason-codes', subtitle: 'Adjustment reasons', storyDesc: 'As an administrator, I want to manage reason codes so that adjustments are properly categorized.\n- View list of reason codes\n- Create reason code: Code, Name, Adjustment Type (Add/Remove)\n- Edit reason code details\n- Activate/Deactivate reason code\n- Prevent delete if used in adjustments' },
                            { id: 'ADJUSTMENT_APPROVAL', label: 'Approvals', path: '/inventory/adjustments/approvals', subtitle: 'Pending approvals', storyDesc: 'As a store manager, I want to approve stock adjustments so that corrections are authorized.\n- View pending approval queue\n- Review adjustment detail: items, quantities, reasons, documents\n- Approve or reject with comments\n- View approval history\n- Set approval thresholds' },
                            { id: 'ADJUSTMENT_REPORTS', label: 'Adjustment Reports', path: '/inventory/adjustments/reports', subtitle: 'Export adjustments', storyDesc: 'As a store manager, I want to export adjustment reports so that I can analyze correction patterns.\n- Filter by date range, reason code, location\n- View total adjustment value by period\n- View top adjustment reasons\n- Compare adjustments across locations\n- Export to CSV/Excel' },
                        ]
                    },
                    // --- Count ---
                    {
                        id: 'physical-inventory', label: 'Count',
                        children: [
                            { id: 'CYCLE_SCHEDULE', label: 'Count Schedule', path: '/inventory/cycle-counting-schedule', subtitle: 'Plan stock takes', storyDesc: 'As a store manager, I want to schedule stock counts so that physical verification is planned systematically.\n- Create count schedule: frequency (daily/weekly/monthly), scope\n- Assign count to team members\n- Set ABC-based counting frequency\n- View upcoming count calendar\n- Generate count sheets from schedule' },
                            { id: 'STOCK_TAKE', label: 'Physical Counts', path: '/inventory/stock-takes', subtitle: 'All stock takes', storyDesc: 'As a store manager, I want to manage physical stock counts so that I can track all counting activities.\n- View stock take list with status filter\n- Create stock take: select location, scope (full/partial)\n- Freeze stock movements during count\n- View count progress percentage\n- Close or cancel stock take' },
                            { id: 'STOCK_TAKE_EXEC', label: 'Execute Count', path: '/inventory/stock-take-execution/new', subtitle: 'Execute counts', storyDesc: 'As a warehouse staff, I want to execute a stock count so that I can record actual quantities.\n- Load count sheet for assigned location\n- Enter counted quantities per item\n- Scan barcode to locate item in list\n- Mark items as counted or skipped\n- Submit completed count' },
                            { id: 'VARIANCE_ANALYSIS', label: 'Variance Analysis', path: '/inventory/variance-analysis/latest', subtitle: 'Count vs system', storyDesc: 'As a store manager, I want to view count variances so that I can identify discrepancies.\n- View system qty vs counted qty per item\n- View variance quantity and percentage\n- Highlight items with variance above threshold\n- Drill down to batch/serial level\n- Generate variance report' },
                            { id: 'COUNT_APPROVAL', label: 'Count Approval', path: '/inventory/count-approval', subtitle: 'Approve counts', storyDesc: 'As a store manager, I want to approve stock counts so that adjustments are authorized.\n- View counts pending approval\n- Review variance summary\n- Approve count (posts adjustment entries)\n- Reject count with reason\n- View approval history' },
                            { id: 'RECONCILIATION', label: 'Reconciliation', path: '/inventory/reconciliation/latest', subtitle: 'Post-approval reconciliation', storyDesc: 'As a store manager, I want to reconcile stock counts so that system is updated after approval.\n- View reconciliation summary\n- Confirm adjustment entries posted\n- View items adjusted with quantities\n- Generate reconciliation report\n- Close reconciliation' },
                            { id: 'STOCK_TAKE_REPORTS', label: 'Count Reports', path: '/inventory/stock-take-reports', subtitle: 'Export reports', storyDesc: 'As a store manager, I want to export count reports so that I can document physical verification.\n- Filter by date range, location, status\n- View count accuracy percentage\n- View total variance value\n- Compare counts across periods\n- Export to CSV/Excel' },
                        ]
                    },
                    // --- Inventory Valuation ---
                    {
                        id: 'inventory-valuation', label: 'Inventory Valuation',
                        children: [
                            { id: 'VALUATION_METHODS', label: 'Valuation Methods', path: '/inventory/valuation/methods', subtitle: 'FIFO/LIFO/Weighted Avg', storyDesc: 'As a finance manager, I want to configure valuation methods so that stock is valued correctly.\n- View configured valuation methods per item category\n- Set method: FIFO, LIFO, Weighted Average, Standard Cost\n- Set default method for new items\n- View method impact comparison\n- Cannot change method if period is closed' },
                            { id: 'VALUATION_REPORTS', label: 'Valuation Reports', path: '/inventory/valuation/reports', subtitle: 'Stock value reports', storyDesc: 'As a finance manager, I want to generate valuation reports so that I can report stock value accurately.\n- View stock value by item, category, location\n- Compare valuation across methods\n- View cost layers (FIFO detail)\n- Generate period-end valuation snapshot\n- Export to CSV/Excel' },
                            { id: 'COST_ANALYSIS', label: 'Cost Analysis', path: '/inventory/valuation/cost-analysis', subtitle: 'Cost breakdown', storyDesc: 'As a finance manager, I want to analyze inventory costs so that I can control margins.\n- View landed cost breakdown per item\n- View cost components: base cost, freight, customs, handling\n- Compare cost across suppliers\n- View cost trend over time\n- Export cost analysis report' },
                            { id: 'PERIOD_VALUATION', label: 'Period-end Valuation', path: '/inventory/valuation/period-end', subtitle: 'Period snapshot', storyDesc: 'As a finance manager, I want to run period-end valuation so that stock value is locked for financial reporting.\n- Select fiscal period to value\n- Run valuation calculation\n- Review valuation summary before posting\n- Post valuation entries to GL\n- View historical period valuations' },
                        ]
                    },
                    // --- Restock ---
                    {
                        id: 'replenishment-planning', label: 'Restock',
                        children: [
                            { id: 'REORDER_RULES', label: 'Reorder Rules', path: '/inventory/replenishment/rules', subtitle: 'Set policies & levels', storyDesc: 'As a store manager, I want to configure reorder rules so that stock is automatically flagged for replenishment.\n- Set reorder point per item/location\n- Set reorder quantity (EOQ or fixed)\n- Set maximum stock level\n- Set lead time in days\n- Enable/disable auto-PR generation' },
                            { id: 'REPLENISH_SUGGEST', label: 'Restock Worksheet', path: '/inventory/replenishment/worksheet', subtitle: 'Purchasing suggestions', storyDesc: 'As a store manager, I want to view restock suggestions so that I can raise purchase orders efficiently.\n- View items below reorder point\n- View suggested order quantity\n- View preferred supplier per item\n- Select items and create bulk PR\n- Filter by category and location' },
                            { id: 'SAFETY_STOCK', label: 'Safety Stock', path: '/inventory/replenishment/safety-stock', subtitle: 'Optimize buffers', storyDesc: 'As a store manager, I want to configure safety stock levels so that stockouts are prevented.\n- Set safety stock buffer per item\n- Calculate based on demand variability\n- View items below safety stock\n- Adjust safety stock based on seasonality\n- Export safety stock report' },
                            { id: 'MIN_MAX', label: 'Min/Max Planning', path: '/inventory/replenishment/min-max-planning', subtitle: 'Stock band visualization', storyDesc: 'As a store manager, I want to visualize min/max stock bands so that I can plan inventory levels.\n- View min/max/current stock per item\n- Visual band chart showing stock position\n- Identify items outside band (above max or below min)\n- Adjust min/max levels\n- Export planning data' },
                        ]
                    },
                    // --- Batches ---
                    {
                        id: 'batch-serial', label: 'Batches',
                        children: [
                            { id: 'BATCH_MGMT', label: 'Batch Management', path: '/inventory/batches', subtitle: 'Batch tracking', storyDesc: 'As a warehouse manager, I want to manage batches so that I can track items by production lot.\n- View batch list with search by batch number\n- Create batch: number, manufacturing date, expiry date\n- View stock quantity per batch\n- View batch movement history\n- Deactivate expired batches' },
                            { id: 'SERIAL_TRACKING', label: 'Serial Tracking', path: '/inventory/serials', subtitle: 'Serial tracking', storyDesc: 'As a warehouse manager, I want to track serial numbers so that individual units can be traced.\n- View serial number list with status filter\n- Register serial numbers on receipt\n- Track serial number through lifecycle (receipt → sale → return)\n- View serial number history\n- Search by serial number' },
                            { id: 'EXPIRY_MGMT', label: 'Expiry Management', path: '/inventory/expiry-management', subtitle: 'Expiry alerts', storyDesc: 'As a store manager, I want to manage product expiry so that expired items are not sold.\n- View items nearing expiry (configurable: 30/60/90 days)\n- Set FEFO (First Expiry First Out) policy\n- Alert on items expired but still in stock\n- Quarantine expired batches\n- Generate expiry report' },
                            { id: 'BATCH_TRACE', label: 'Batch Traceability', path: '/inventory/batch-traceability', subtitle: 'Trace batch movements', storyDesc: 'As a quality manager, I want to trace a batch through the supply chain so that I can handle recalls.\n- Enter batch number to trace\n- View full journey: supplier → receipt → storage → sale\n- View all customers who received items from batch\n- View related GRN, PO, and invoice references\n- Export traceability report' },
                        ]
                    },
                    // --- Stock Reports ---
                    {
                        id: 'inventory-reports', label: 'Stock Reports',
                        children: [
                            { id: 'STOCK_SUMMARY_REPORT', label: 'Stock Summary', path: '/inventory/reports/stock-summary', subtitle: 'Current stock export', storyDesc: 'As a store manager, I want to generate a stock summary report so that I can share current inventory status.\n- Filter by location, category, date\n- View item code, name, quantity, value\n- Sort by any column\n- Export to CSV and Excel' },
                            { id: 'MOVEMENT_REPORT', label: 'Movement Report', path: '/inventory/movement-reports', subtitle: 'Movement history export', storyDesc: 'As a store manager, I want to view stock movement history so that I can trace all inventory changes.\n- Filter by date range, item, location, movement type\n- View movement type: GRN, Sale, Adjustment, Transfer\n- View before and after quantities\n- Export to CSV' },
                            { id: 'STOCK_VALUATION_REPORT', label: 'Valuation Report', path: '/inventory/reports/valuation-report', subtitle: 'Stock value export', storyDesc: 'As a finance manager, I want to export stock valuation report for financial reporting.\n- Select valuation method and period\n- View stock value by item and category\n- Compare current vs previous period\n- Export to CSV/Excel' },
                            { id: 'STOCK_AGING_REPORT', label: 'Aging Report', path: '/inventory/aging-analysis', subtitle: 'Stock age analysis', storyDesc: 'As a store manager, I want to export stock aging report so that I can analyze inventory age.\n- View aging buckets by category\n- View value at risk\n- Highlight items nearing expiry\n- Export to CSV' },
                            { id: 'ABC_ANALYSIS_REPORT', label: 'Top Items (ABC)', path: '/inventory/reports/abc-analysis', subtitle: 'ABC classification', storyDesc: 'As a merchandising manager, I want to classify items by ABC analysis so that I can prioritize high-value items.\n- Classify items: A (top 20% revenue), B (next 30%), C (bottom 50%)\n- View contribution percentage per class\n- Filter by category\n- Export classification report' },
                            { id: 'VELOCITY_REPORT', label: 'Movement Speed', path: '/inventory/reports/velocity-analysis', subtitle: 'Movement velocity', storyDesc: 'As a store manager, I want to analyze item movement velocity so that I can optimize ordering.\n- View fast-moving items\n- View slow-moving items\n- Set velocity thresholds\n- Compare velocity across periods\n- Export velocity report' },
                            { id: 'DEAD_STOCK_REPORT', label: 'Dead Stock', path: '/inventory/reports/dead-stock', subtitle: 'No movement items', storyDesc: 'As a store manager, I want to identify dead stock so that I can take clearance actions.\n- View items with zero movement in N days\n- View stock value of dead items\n- Suggest clearance or write-off\n- Filter by category and location\n- Export dead stock report' },
                        ]
                    },
                    // --- Stockroom Settings ---
                    {
                        id: 'inventory-config', label: 'Stockroom Settings',
                        children: [
                            { id: 'INVENTORY_PARAMETERS', label: 'General Settings', path: '/inventory/config/settings', subtitle: 'Global settings', storyDesc: 'As an administrator, I want to configure inventory settings so that stock management follows business rules.\n- Set default stock valuation method\n- Enable/disable negative stock\n- Set stock movement approval threshold\n- Configure stock alert thresholds\n- Set barcode format preferences' },
                            { id: 'MOVEMENT_TYPES', label: 'Movement Types', path: '/inventory/config/movement-types', subtitle: 'Transaction types', storyDesc: 'As an administrator, I want to manage movement types so that stock transactions are categorized.\n- View list of movement types\n- Create movement type: Code, Name, Direction (In/Out/Transfer)\n- Set GL account mapping per movement type\n- Activate/Deactivate movement type\n- Prevent delete if used in transactions' },
                            { id: 'VALUATION_METHODS', label: 'Valuation Methods', path: '/inventory/config/valuation-methods', subtitle: 'Costing methods', storyDesc: 'As an administrator, I want to configure available valuation methods so that finance can select appropriate costing.\n- Enable/disable valuation methods: FIFO, LIFO, Weighted Average, Standard\n- Set default method for new items\n- View method usage across item categories\n- Lock method changes during open periods' },
                            { id: 'APPROVAL_RULES', label: 'Approval Rules', path: '/inventory/config/approval-rules', subtitle: 'Workflow rules', storyDesc: 'As an administrator, I want to configure approval rules so that stock operations are properly authorized.\n- Set approval required for: adjustments, transfers, write-offs\n- Set approval threshold amounts\n- Configure approval hierarchy\n- Enable/disable auto-approval below threshold\n- View approval rule audit log' },
                        ]
                    },
                ]
            },
            {
                id: 'procurement', label: 'Supply Flow',
                children: [
                    {
                        id: 'SUPPLIER_MASTER', label: 'Suppliers', path: '/partners/suppliers', subtitle: 'Manage suppliers and contacts',
                        storyDesc: 'As a procurement manager, I want to maintain supplier records so that purchase orders can be raised against them.\n- View supplier list with search and status filter\n- Create supplier: Code, Name, Type, Contact, Payment Terms, Tax ID\n- Add multiple contacts per supplier\n- Add billing and shipping addresses\n- Set default payment terms and currency\n- Deactivate supplier with confirmation\n- Prevent deactivate if open POs exist\n- Keyboard shortcuts: F2=New, F8=Save, ESC=Cancel'
                    },
                    {
                        id: 'COMPLIANCE', label: 'Vendor Compliance', path: '/procurement/compliance', subtitle: 'Vendor compliance',
                        storyDesc: 'As a procurement manager, I want to track vendor compliance so that only qualified suppliers are used.\n- View compliance checklist per vendor\n- Upload compliance documents (certificates, licenses)\n- Set expiry dates for compliance documents\n- Alert on expiring documents\n- Block non-compliant vendors from new POs'
                    },
                    {
                        id: 'REQUISITIONS', label: 'Request Stock', path: '/procurement/requisitions', subtitle: 'Internal demand (PR)',
                        storyDesc: 'As a store manager, I want to raise purchase requisitions so that low stock items are replenished.\n- Create PR: select items, quantities, required date, location\n- Auto-suggest items below reorder level\n- Submit PR for approval\n- Approve/reject PR with comments\n- Convert approved PR to Purchase Order\n- Cancel PR with reason'
                    },
                    {
                        id: 'RFQS', label: 'Vendor Quotes', path: '/procurement/rfqs', subtitle: 'Vendor bidding (RFQ)',
                        storyDesc: 'As a procurement manager, I want to request quotations from vendors so that I can compare pricing before placing orders.\n- Create RFQ: select items, invite vendors\n- Set response deadline\n- View and compare vendor responses\n- Award RFQ to selected vendor\n- Convert awarded RFQ to Purchase Order'
                    },
                    {
                        id: 'PURCHASE_ORDERS', label: 'Purchase Orders', path: '/procurement/orders', subtitle: 'Commitment to supplier',
                        storyDesc: 'As a procurement manager, I want to create purchase orders so that suppliers are formally committed to deliver goods.\n- Create PO: select supplier, items, quantities, unit cost, delivery date\n- Apply supplier discount\n- Approve PO (if approval workflow enabled)\n- Send PO to supplier (print/email)\n- Receive goods against PO (GRN)\n- Cancel PO with reason\n- View PO status: Draft/Approved/Partially Received/Closed'
                    },
                    {
                        id: 'ASNS', label: 'ASNs', path: '/procurement/asns', subtitle: 'Advance Shipment Notices',
                        storyDesc: 'As a warehouse manager, I want to view advance shipment notices so that I can prepare for incoming deliveries.\n- View ASN list with expected delivery date\n- Create ASN from PO (auto-populate items)\n- Enter expected quantities and delivery schedule\n- Track shipment status\n- Convert ASN to GRN on arrival'
                    },
                    {
                        id: 'RECEIPTS', label: 'Receiving (GRN)', path: '/procurement/receipts', subtitle: 'Receive stock from supplier',
                        storyDesc: 'As a warehouse manager, I want to record goods receipt so that stock is updated when supplier deliveries arrive.\n- Create GRN against a PO\n- Enter received quantities per item (partial receipt allowed)\n- Record batch/serial numbers if item is tracked\n- Enter supplier invoice reference\n- Confirm GRN to update stock\n- View GRN history'
                    },
                    {
                        id: 'PURCHASE_RETURNS', label: 'Return to Vendor', path: '/procurement/returns', subtitle: 'Return to vendor',
                        storyDesc: 'As a warehouse manager, I want to return defective or excess goods to suppliers so that stock is corrected and debit notes are raised.\n- Create return against a GRN\n- Select items and quantities to return\n- Select return reason: Defective/Excess/Wrong Item\n- Confirm return to deduct stock\n- Generate debit note to supplier'
                    },
                    {
                        id: 'BILLS', label: 'Supplier Bills', path: '/procurement/bills', subtitle: '3-way matching',
                        storyDesc: 'As an accounts payable executive, I want to process supplier bills so that payments can be made against verified invoices.\n- View bill list with status filter\n- Create bill from GRN (auto-populate)\n- 3-way match: PO vs GRN vs Bill\n- Approve bill for payment\n- View outstanding bills'
                    },
                    {
                        id: 'PAYMENTS', label: 'Vendor Payments', path: '/procurement/payments', subtitle: 'Vendor payments',
                        storyDesc: 'As an accounts payable executive, I want to process vendor payments so that approved bills are settled on time.\n- View payment queue with due dates\n- Create payment: select bills, payment method, bank account\n- Process batch payments\n- Record payment reference (UTR, cheque number)\n- View payment history per vendor'
                    },
                    {
                        id: 'procurement-config', label: 'Supply Settings', path: '/procurement/configuration', subtitle: 'Rules and approvals',
                        storyDesc: 'As an administrator, I want to configure supply chain rules so that purchasing follows business policies.\n- Set PO approval threshold\n- Configure default payment terms\n- Set GRN tolerance percentage\n- Enable/disable 3-way matching\n- Configure vendor rating criteria'
                    },
                ]
            },
            {
                id: 'customers', label: 'Customers',
                children: [
                    {
                        id: 'CUSTOMER_MASTER', label: 'Customers', path: '/partners/customers', subtitle: 'Customer data and contacts',
                        storyDesc: 'As a sales executive, I want to maintain customer records so that customers can be linked to sales and POS transactions.\n- View list with search by name/code and filter by status\n- Create: Customer Code (auto/manual), Name, Type, Email, Phone (mandatory)\n- Set credit limit: enable credit toggle, set limit and payment terms\n- Address management: billing and shipping with Country/State/City cascade\n- Duplicate code validation\n- Deactivate/Activate with confirmation\n- Keyboard shortcuts: F2=New, F8=Save, ESC=Cancel\n- Unsaved changes confirmation dialog'
                    },
                    {
                        id: 'CUSTOMER_GROUPS', label: 'Customer Segments', path: '/customers/groups', subtitle: 'Segments and groups',
                        storyDesc: 'As a marketing manager, I want to group customers into segments so that targeted pricing and loyalty programs can be applied.\n- Create segment: Name, Description, criteria\n- Add/remove customers from segment\n- Assign price list to segment\n- Assign loyalty program to segment\n- View segment member count'
                    },
                    {
                        id: 'LOYALTY_PROGRAMS', label: 'Loyalty Programs', path: '/customers/loyalty', subtitle: 'Rewards and loyalty plans',
                        storyDesc: 'As a marketing manager, I want to configure loyalty programs so that customers earn and redeem points at POS.\n- Create program: Name, Points per rupee earned, Redemption rate\n- Set minimum redemption threshold\n- Set expiry policy for points\n- Assign program to customer segments\n- View program enrollment count'
                    },
                ]
            },
            {
                id: 'insights', label: 'Insights',
                children: [
                    {
                        id: 'SALES_PERFORMANCE', label: 'Sales Performance', path: '/retail/analytics/sales-performance', subtitle: 'Sales trends and metrics',
                        storyDesc: 'As a store manager, I want to view sales performance analytics so that I can track revenue against targets.\n- View total sales, average order value, number of transactions\n- Filter by date range, location, cashier, customer segment\n- Compare current period vs previous period\n- View top-selling items\n- View sales by payment method\n- Export report'
                    },
                    {
                        id: 'CUSTOMER_ANALYTICS', label: 'Customer Analytics', path: '/retail/analytics/customer', subtitle: 'Customer behavior insights',
                        storyDesc: 'As a marketing manager, I want to analyze customer purchase behavior so that I can design targeted promotions.\n- View new vs returning customer count\n- View average spend per customer\n- View top customers by revenue\n- View customer segment performance\n- Filter by date range and location'
                    },
                    {
                        id: 'PRODUCT_PERFORMANCE', label: 'Product Performance', path: '/retail/analytics/product', subtitle: 'Product sales analysis',
                        storyDesc: 'As a merchandising manager, I want to analyze product sales performance so that I can optimize the product mix.\n- View top and bottom selling items\n- View revenue, quantity sold, and margin per item\n- Filter by category, date range, location\n- View slow-moving items (no sale in N days)\n- Export report'
                    },
                    {
                        id: 'STOCK_ANALYSIS', label: 'Stock Analysis', path: '/retail/analytics/stock', subtitle: 'Stock level insights',
                        storyDesc: 'As a store manager, I want to analyze stock levels so that I can identify overstocked and understocked items.\n- View stock distribution by category\n- Compare stock levels across locations\n- View stock turnover ratio per item\n- Identify slow-moving and fast-moving items\n- Filter by date range and location'
                    },
                    {
                        id: 'STOCK_SUMMARY_REPORT', label: 'Stock Summary', path: '/inventory/reports/stock-summary', subtitle: 'Current stock export',
                        storyDesc: 'As a store manager, I want to export a stock summary report so that I can share current inventory status.\n- Filter by location, category, date\n- View item code, name, quantity, value\n- Sort by any column\n- Export to CSV and Excel'
                    },
                    {
                        id: 'STOCK_VALUATION_REPORT', label: 'Valuation Report', path: '/inventory/reports/valuation-report', subtitle: 'Stock value export',
                        storyDesc: 'As a finance manager, I want to view stock valuation reports so that inventory value is reflected in financial statements.\n- View stock value by item, category, location\n- Select valuation method: FIFO, LIFO, Weighted Average\n- View cost vs market comparison\n- Export to CSV/Excel'
                    },
                    {
                        id: 'STOCK_AGING_REPORT', label: 'Aging Report', path: '/inventory/aging-analysis', subtitle: 'Stock age analysis',
                        storyDesc: 'As a store manager, I want to view stock aging so that I can identify slow-moving and expiring inventory.\n- View aging buckets: 0-30, 31-60, 61-90, 90+ days\n- Filter by category and location\n- Highlight items nearing expiry\n- Export to CSV'
                    },
                    {
                        id: 'MOVEMENT_ANALYTICS', label: 'Movement Analytics', path: '/retail/analytics/movement', subtitle: 'Stock movement patterns',
                        storyDesc: 'As a store manager, I want to analyze stock movement patterns so that I can optimize replenishment.\n- View inbound vs outbound movement trends\n- Compare movement by period\n- View movement by category and location\n- Identify seasonal patterns\n- Export data'
                    },
                    {
                        id: 'MOVEMENT_REPORT', label: 'Movement Report', path: '/inventory/movement-reports', subtitle: 'Movement history export',
                        storyDesc: 'As a store manager, I want to export stock movement history so that I can audit inventory changes.\n- Filter by date range, item, location, movement type\n- View movement type: GRN, Sale, Adjustment, Transfer\n- View before and after quantities\n- Export to CSV'
                    },
                    {
                        id: 'ABC_ANALYSIS_REPORT', label: 'ABC Analysis', path: '/inventory/reports/abc-analysis', subtitle: 'Product classification',
                        storyDesc: 'As a merchandising manager, I want to run ABC analysis so that I can focus on high-value items.\n- Classify items by revenue contribution: A (top 20%), B (next 30%), C (bottom 50%)\n- View percentage contribution per class\n- Filter by category and date range\n- Export classification report'
                    },
                    {
                        id: 'VELOCITY_REPORT', label: 'Velocity Analysis', path: '/inventory/reports/velocity-analysis', subtitle: 'Fast/slow movers',
                        storyDesc: 'As a store manager, I want to analyze item movement velocity so that I can optimize shelf space and ordering.\n- View fast-moving items (high turnover)\n- View slow-moving items (low turnover)\n- Set velocity thresholds\n- Filter by category and location\n- Export report'
                    },
                    {
                        id: 'DEAD_STOCK_REPORT', label: 'Dead Stock', path: '/inventory/reports/dead-stock', subtitle: 'No movement items',
                        storyDesc: 'As a store manager, I want to identify dead stock so that I can take clearance or write-off actions.\n- View items with zero movement in N days (configurable)\n- View stock value of dead items\n- Filter by category and location\n- Suggest clearance actions\n- Export report'
                    },
                    {
                        id: 'REPORT_BUILDER', label: 'Report Builder', path: '/retail/reports/builder', subtitle: 'Create custom reports',
                        storyDesc: 'As a store manager, I want to build custom reports so that I can analyze data specific to my needs.\n- Select data source (Sales, Inventory, Customers)\n- Choose columns and filters\n- Add grouping and aggregation\n- Preview report\n- Save as reusable template'
                    },
                    {
                        id: 'SAVED_REPORTS', label: 'Saved Reports', path: '/retail/reports/saved', subtitle: 'My saved reports',
                        storyDesc: 'As a store manager, I want to access my saved reports so that I can run them quickly.\n- View list of saved reports with last run date\n- Run saved report with current data\n- Edit report parameters\n- Delete saved report\n- Share report with other users'
                    },
                    {
                        id: 'SCHEDULED_REPORTS', label: 'Scheduled Reports', path: '/retail/reports/scheduled', subtitle: 'Automated reports',
                        storyDesc: 'As a store manager, I want to schedule reports so that they run automatically and are delivered to me.\n- Schedule saved report: daily, weekly, monthly\n- Set delivery method: email, dashboard, file export\n- View schedule history and status\n- Pause/resume schedule\n- Edit schedule parameters'
                    },
                ]
            },
            {
                id: 'live-view', label: 'Live View',
                children: [
                    { id: 'RETAIL_OVERVIEW_LIVE', label: 'Retail Overview', path: '/retail/live/overview', subtitle: 'Real-time retail metrics', storyDesc: 'As a store manager, I want to view a live retail dashboard so that I can monitor operations in real-time.\n- View live sales counter\n- View active sessions and open bills\n- View real-time revenue vs target\n- Auto-refresh every 30 seconds' },
                    { id: 'STOCK_PULSE_LIVE', label: 'Stock Pulse', path: '/inventory/dashboard', subtitle: 'Live stock summary and KPIs', storyDesc: 'As a store manager, I want to see live stock KPIs so that I can react to inventory issues immediately.\n- View total stock value (live)\n- View items below reorder level\n- View stock movement rate\n- View category-wise stock distribution' },
                    { id: 'STOCK_BY_LOCATION_LIVE', label: 'Stock by Location', path: '/inventory/stock-by-location', subtitle: 'Live location-wise stock', storyDesc: 'As a warehouse manager, I want to see live stock by location so that I can monitor distribution.\n- View stock quantity per location\n- View location utilization percentage\n- Highlight locations with critical low stock\n- Compare locations side by side' },
                    { id: 'STOCK_VALUATION_LIVE', label: 'Stock Valuation', path: '/inventory/stock-valuation', subtitle: 'Live stock value', storyDesc: 'As a finance manager, I want to see live stock valuation so that I can track inventory assets.\n- View total stock value by valuation method\n- View value by category and location\n- View value trend chart\n- Compare current vs previous period' },
                    { id: 'MOVEMENT_SPEED_LIVE', label: 'Movement Speed', path: '/inventory/movement-trends', subtitle: 'Live movement analytics', storyDesc: 'As a store manager, I want to see live stock movement speed so that I can identify velocity changes.\n- View inbound vs outbound movement rate\n- View items with sudden velocity change\n- View movement heatmap by category\n- Set alert thresholds' },
                    { id: 'STOCK_ALERTS_LIVE', label: 'Stock Alerts', path: '/inventory/alerts', subtitle: 'Live low stock and overstock alerts', storyDesc: 'As a store manager, I want to see live stock alerts so that I can take immediate action.\n- View low stock alerts with severity\n- View overstock alerts\n- View expiry alerts\n- Acknowledge or dismiss alerts\n- Create PO from low stock alert' },
                    { id: 'SALES_METRICS_LIVE', label: 'Sales Metrics', path: '/retail/live/sales', subtitle: 'Live sales tracking', storyDesc: 'As a store manager, I want to see live sales metrics so that I can track performance throughout the day.\n- View live sales counter and revenue\n- View transactions per hour chart\n- View average basket value\n- View payment method breakdown\n- Compare with same day last week' },
                    { id: 'POS_PERFORMANCE_LIVE', label: 'POS Performance', path: '/retail/live/pos', subtitle: 'Live POS activity', storyDesc: 'As a store manager, I want to monitor live POS performance so that I can optimize staffing.\n- View active POS terminals and cashiers\n- View transactions per terminal\n- View average transaction time\n- View queue length estimate\n- Identify idle terminals' },
                ]
            },
        ]
    },

    {
        id: 'setup', label: 'System Configuration',
        children: [
            {
                id: 'setup-group', label: 'Configuration',
                children: [
                    {
                        id: 'company', label: 'Company Settings', path: '/setup/company', subtitle: 'Company details and preferences',
                        storyDesc: 'As an administrator, I want to configure company settings so that the system reflects our business identity.\n- View and edit company name, legal entity type, registration number\n- Set default currency, timezone, date format\n- Upload company logo\n- Configure fiscal year start month\n- Set default language\n- Keyboard shortcuts: F8=Save, ESC=Cancel'
                    },
                    {
                        id: 'locations-setup', label: 'Location Setup', path: '/setup/locations', subtitle: 'Manage company locations',
                        storyDesc: 'As an administrator, I want to manage company locations so that stock and transactions are tracked per location.\n- View location list with type filter (Warehouse/Store/Office)\n- Create location: Code, Name, Type, Address\n- Edit location details\n- Set location as default for a module\n- Deactivate location (prevent if active stock exists)'
                    },
                    {
                        id: 'fiscal-periods', label: 'Fiscal Periods', path: '/setup/fiscal-periods', subtitle: 'Financial year and periods',
                        storyDesc: 'As a finance manager, I want to configure fiscal periods so that transactions are posted to the correct accounting period.\n- View fiscal year list\n- Create fiscal year: Start Date, End Date, Period count (12/13)\n- Auto-generate monthly periods\n- Open/Close individual periods\n- Prevent posting to closed periods'
                    },
                    {
                        id: 'currencies-exchange', label: 'Currencies & Exchange', path: '/setup/currencies', subtitle: 'Currency management',
                        storyDesc: 'As a finance manager, I want to manage currencies and exchange rates so that multi-currency transactions are processed correctly.\n- View currency list\n- Add currency: Code, Name, Symbol\n- Set exchange rate (manual entry)\n- Set base currency\n- View exchange rate history'
                    },
                    {
                        id: 'tax-config', label: 'Tax Configuration', path: '/setup/tax', subtitle: 'Tax rules and settings',
                        storyDesc: 'As a finance manager, I want to configure tax rules so that taxes are applied correctly on transactions.\n- Create tax code: Name, Rate, Type (GST/VAT/Exempt)\n- Assign tax code to item categories\n- Set default tax for sales and purchases\n- View tax report by period'
                    },
                ]
            }
        ]
    },
    {
        id: 'finance', label: 'Financial Management',
        children: [
            {
                id: 'finance-dashboard', label: 'Dashboard', path: '/finance/dashboard', subtitle: 'Financial overview and alerts',
                storyDesc: 'As a finance manager, I want to see a financial dashboard so that I can monitor the company health.\n- View cash flow chart\n- View accounts receivable/payable totals\n- View budget vs actuals\n- View key financial ratios'
            },
            {
                id: 'finance-setup', label: 'Setup & Configuration',
                children: [
                    {
                        id: 'core-financial-setup', label: 'Core Financial Setup',
                        children: [
                            { id: 'FIN_FISCAL_PERIODS', label: 'Fiscal Periods', path: '/finance/setup/fiscal-periods', subtitle: 'Define financial year periods', storyDesc: 'Manage financial years and opening/closing of fiscal periods. Support for bulk generation of periods and mandatory validation of date ranges.' },
                            { id: 'chart-of-accounts', label: 'Chart of Accounts', path: '/finance/setup/chart-of-accounts', subtitle: 'GL account structure', storyDesc: 'As a finance manager, I want to manage the chart of accounts so that I can organize financial transactions.\n- View hierarchical tree of accounts\n- Create/edit accounts with category and type\n- Search accounts by code or name\n- Export COA to PDF/Excel' },
                            { id: 'account-groups', label: 'Account Groups', path: '/finance/setup/account-groups', subtitle: 'Group accounts by type', storyDesc: 'As a finance manager, I want to group accounts so that I can generate summary financial reports.\n- Create account groups (e.g., Current Assets, Fixed Assets)\n- Nest groups for hierarchical reporting\n- Assign accounts to groups' },
                            { id: 'ledgers', label: 'Ledgers', path: '/finance/setup/ledgers', subtitle: 'General and sub-ledgers', storyDesc: 'As a finance manager, I want to manage ledgers so that I can track detailed transactions.\n- View General Ledger\n- View Subsidiary Ledgers (Customers, Suppliers)\n- Reconcile sub-ledgers with GL' },
                            { id: 'cost-centers', label: 'Cost Centers', path: '/finance/setup/cost-centers', subtitle: 'Departmental cost tracking', storyDesc: 'As a finance manager, I want to track costs by department so that I can analyze departmental performance.\n- Create cost centers\n- Assign transactions to cost centers\n- Generate P&L by cost center' },
                            { id: 'FIN_CURRENCIES_EXCHANGE', label: 'Currencies & Exchange', path: '/finance/setup/currencies', subtitle: 'Multi-currency and rates', storyDesc: 'As a finance manager, I want to manage multiple currencies so that I can record international transactions.\n- Define currencies\n- Set daily exchange rates\n- Calculate unrealized gains/losses' },
                            { id: 'voucher-types', label: 'Voucher Types', path: '/finance/setup/vouchers', subtitle: 'Journal entry types', storyDesc: 'As a finance manager, I want to define voucher types so that I can categorize journal entries.\n- Create types: Journal, Payment, Receipt, Sales, Purchase\n- Set numbering sequences\n- Configure approval rules per type' },
                        ]
                    },
                    {
                        id: 'tax-categories', label: 'Tax Categories',
                        children: [
                            { id: 'FIN_TAX_GLOBAL', label: 'Tax Configuration', path: '/finance/setup/tax/global', subtitle: 'Global tax rules and settings', storyDesc: 'As a tax manager, I want to configure global tax settings so that the system calculates taxes correctly.\n- Set default tax rates\n- Define tax jurisdictions\n- Configure inclusive/exclusive tax display' },
                            { id: 'withholding-tax', label: 'Withholding Tax', path: '/finance/setup/tax/withholding', subtitle: 'TDS and withholding setup', storyDesc: 'As a finance manager, I want to manage withholding tax so that I can comply with tax regulations.\n- Define TDS/WHT categories\n- Set rates based on recipient type\n- Generate withholding tax certificates' },
                            { id: 'tax-codes', label: 'Tax Codes & Rates', path: '/finance/setup/tax/codes', subtitle: 'GST, VAT and custom rates', storyDesc: 'As a finance manager, I want to define tax codes so that I can apply specific taxes to items.\n- Create tax codes with percentages\n- Link codes to GL accounts\n- Support for tax components (CGST, SGST, IGST)' },
                            { id: 'tax-returns-setup', label: 'Tax Returns Setup', path: '/finance/setup/tax/returns', subtitle: 'Filing and return configuration', storyDesc: 'As a tax manager, I want to configure tax returns so that I can prepare accurate filings.\n- Map tax codes to return fields\n- Set filing frequency\n- Export tax return data' },
                        ]
                    },
                    { id: 'budgets', label: 'Budgets', path: '/finance/setup/budgets', subtitle: 'Annual and departmental budgets', storyDesc: 'As a finance manager, I want to set budgets so that I can control spending.\n- Create annual and monthly budgets\n- Set budgets by account and cost center\n- Track actual vs budget in real-time\n- Set budget alerts' }
                ]
            },
            {
                id: 'finance-operations', label: 'Operations & Entries',
                children: [
                    { id: 'unified-entry', label: 'Unified Entry Console', path: '/finance/operations/console', subtitle: 'Single screen for all entries', storyDesc: 'As a finance user, I want a single entry screen so that I can record transactions efficiently.\n- Dynamic form based on voucher type\n- Auto-balancing of debits and credits\n- Quick account search\n- Attach scanned documents (F6)' },
                    { id: 'multi-currency', label: 'Multi-Currency Ops', path: '/finance/operations/multi-currency', subtitle: 'Foreign currency transactions', storyDesc: 'As a finance user, I want to record foreign currency transactions so that I can handle international business.\n- Enter amounts in foreign currency\n- Auto-calculate base currency amount\n- Record gain/loss on transaction' },
                    { id: 'inter-company', label: 'Inter-company Transactions', path: '/finance/operations/inter-company', subtitle: 'Cross-entity postings', storyDesc: 'As a group accountant, I want to record inter-company transactions so that I can consolidate accounts.\n- Select entity for debit and credit\n- Auto-calculate due to/from balances\n- Reconcile inter-company accounts' },
                ]
            },
            {
                id: 'bank-reconciliation', label: 'Bank Reconciliation',
                children: [
                    { id: 'cheque-mgmt', label: 'Cheque Management', path: '/finance/banking/cheques', subtitle: 'Issue and track cheques', storyDesc: 'As a finance user, I want to manage cheques so that I can track payments.\n- Record issued and received cheques\n- Manage cheque books\n- Update cheque status (Cleared/Bounced)' },
                    { id: 'statement-import', label: 'Statement Import', path: '/finance/banking/import', subtitle: 'Import bank statements', storyDesc: 'As a finance user, I want to import bank statements so that I can reconcile my bank accounts.\n- Import CSV/Excel/OFX files\n- Map statement columns to system fields\n- Preview data before import' },
                    { id: 'auto-reconciliation', label: 'Auto Reconciliation', path: '/finance/banking/auto-recon', subtitle: 'Match transactions automatically', storyDesc: 'As a finance user, I want to auto-match transactions so that I can speed up reconciliation.\n- Match by amount, date, and reference\n- Set matching rules\n- Review and approve exceptions' },
                ]
            },
            {
                id: 'fixed-assets', label: 'Fixed Assets',
                children: [
                    { id: 'asset-categories', label: 'Asset Categories', path: '/finance/assets/categories', subtitle: 'Classify fixed assets', storyDesc: 'As a finance manager, I want to categorize assets so that I can manage them appropriately.\n- Define categories (Land, Buildings, IT Equipment)\n- Set default depreciation methods per category\n- Link to asset and depreciation accounts' },
                    { id: 'depreciation', label: 'Depreciation Methods', path: '/finance/assets/depreciation', subtitle: 'SLM, WDV and custom methods', storyDesc: 'As a finance manager, I want to define depreciation methods so that I can calculate asset value accurately.\n- Configure Straight Line and Reducing Balance methods\n- Set useful life and salvage value\n- Run monthly depreciation' },
                    { id: 'asset-maintenance', label: 'Asset Maintenance', path: '/finance/assets/maintenance', subtitle: 'Maintenance schedules and logs', storyDesc: 'As a facility manager, I want to track asset maintenance so that I can preserve asset value.\n- Schedule preventive maintenance\n- Record maintenance costs\n- Track asset uptime' },
                ]
            },
            {
                id: 'finance-inventory', label: 'Inventory Management',
                children: [
                    { id: 'inventory-transactions', label: 'Inventory Transactions', path: '/finance/inventory/transactions', subtitle: 'Stock impact on financials', storyDesc: 'As a finance manager, I want to see the financial impact of stock movements.\n- View GL postings from GRN and Sales\n- Reconcile inventory control account\n- Run inventory valuation for period end' },
                ]
            },
            {
                id: 'closing-compliance', label: 'Closing & Compliance',
                children: [
                    { id: 'month-end', label: 'Month-End Closing', path: '/finance/closing/month-end', subtitle: 'Close monthly books', storyDesc: 'As a finance manager, I want to close the monthly books so that I can finalize reports.\n- Run month-end checklist\n- Lock transactions for the period\n- Generate monthly P&L and Balance Sheet' },
                    { id: 'year-end', label: 'Year-End Closing', path: '/finance/closing/year-end', subtitle: 'Annual close and carry-forward', storyDesc: 'As a finance manager, I want to close the financial year so that I can prepare annual statements.\n- Carry forward balances to new year\n- Close income and expense accounts to equity\n- Prepare year-end audit files' },
                    { id: 'audit-trail', label: 'Audit Trail', path: '/finance/compliance/audit', subtitle: 'Full transaction audit log', storyDesc: 'As an auditor, I want to see transaction history so that I can verify compliance.\n- View capture of who created/edited/deleted transactions\n- Track date and time of all changes\n- View old and new values for changes' },
                    { id: 'data-backup', label: 'Data Backup', path: '/finance/compliance/backup', subtitle: 'Scheduled data backups', storyDesc: 'As an administrator, I want to back up financial data so that I can recover from data loss.\n- Schedule daily full and incremental backups\n- Encrypt backup files\n- Store backups in secure off-site locations' },
                    { id: 'data-restore', label: 'Data Restore', path: '/finance/compliance/restore', subtitle: 'Restore from backup', storyDesc: 'As an administrator, I want to restore data from backup so that I can recover from system failure.\n- Select backup restoral point\n- Validate data integrity after restore\n- Perform trial restore to sandbox environment' },
                    { id: 'consolidation', label: 'Multi-entity Consolidation', path: '/finance/compliance/consolidation', subtitle: 'Merge multi-company books', storyDesc: 'As a group accountant, I want to consolidate books so that I can see the group performance.\n- Map accounts across entities\n- Eliminate inter-company transactions\n- Generate consolidated financial statements' },
                ]
            },
            {
                id: 'finance-analytics', label: 'Finance Analytics', path: '/finance/analytics', subtitle: 'Financial insights',
                storyDesc: 'As a CFO, I want to analyze financial trends so that I can make strategic decisions.\n- View profitability trends\n- View liquidity ratios\n- Custom report builder for finance data\n- Forecast cash flows'
            }
        ]
    },

    {
        id: 'crm', label: 'Customer Relationship Management',
        children: [
            {
                id: 'crm-dashboard', label: 'Dashboard & Analytics',
                children: [
                    { id: 'sales-dashboard', label: 'Sales Dashboard', path: '/crm/dashboard/sales', subtitle: 'Sales KPIs at a glance', storyDesc: 'As a sales manager, I want to see real-time sales performance so that I can manage my team effectively.\n- View total revenue vs target\n- View individual sales rep performance\n- View deal stage distribution\n- View sales pipeline velocity' },
                    { id: 'lead-conversion', label: 'Lead Conversion', path: '/crm/dashboard/conversion', subtitle: 'Funnel and conversion rates', storyDesc: 'As a marketing manager, I want to track lead conversions so that I can optimize marketing efforts.\n- View conversion rate from lead to deal\n- View conversion by lead source\n- View time to convert metrics\n- Identify bottlenecks in the sales funnel' },
                    { id: 'revenue-tracking', label: 'Revenue Tracking', path: '/crm/dashboard/revenue', subtitle: 'Revenue trends and targets', storyDesc: 'As a finance manager, I want to track revenue trends so that I can forecast future performance.\n- View monthly/quarterly revenue trends\n- Compare revenue against targets\n- View renewal vs new business revenue\n- Export revenue forecasts' },
                    { id: 'activity-summary', label: 'Activity Summary', path: '/crm/dashboard/activity', subtitle: 'Team activity overview', storyDesc: 'As a sales leader, I want to see team activity so that I can ensure engagement.\n- View call and email volume by rep\n- View meeting schedules\n- View task completion rates\n- View last interaction time per lead' },
                ]
            },
            {
                id: 'lead-contact-mgmt', label: 'Lead & Contact Management',
                children: [
                    { id: 'lead-capture', label: 'Lead Capture & Scoring', path: '/crm/leads/capture', subtitle: 'Capture and score inbound leads', storyDesc: 'As a marketing user, I want to capture and score leads so that I can prioritize follow-ups.\n- Capture leads from web forms and API\n- Assign scores based on lead behavior and profile\n- Auto-route leads to appropriate sales regions\n- Set minimum score thresholds' },
                    { id: 'contact-directory', label: 'Contact Directory', path: '/crm/contacts/directory', subtitle: 'All contacts and profiles', storyDesc: 'As a sales user, I want a central contact directory so that I can manage my relationships.\n- Search contacts by name, company, or tag\n- View full contact profile including social data\n- Link contacts to multiple accounts\n- Track individual contact influence score' },
                    { id: 'lead-assignment', label: 'Lead Assignment', path: '/crm/leads/assignment', subtitle: 'Assign leads to sales reps', storyDesc: 'As a sales manager, I want to assign leads so that every lead is followed up.\n- Use round-robin or manual assignment\n- Set territory-based assignment rules\n- View unassigned lead alerts\n- Track assignment history' },
                    { id: 'contact-history', label: 'Contact History', path: '/crm/contacts/history', subtitle: 'Interaction timeline', storyDesc: 'As a sales rep, I want to see the contact history so that I can personalize my outreach.\n- View timeline of emails, calls, and meetings\n- Read internal notes about past interactions\n- View historical documents and agreements\n- View life-cycle stage changes' },
                ]
            },
            {
                id: 'account-opportunity-mgmt', label: 'Account & Opportunity',
                children: [
                    { id: 'account-mgmt', label: 'Account Management', path: '/crm/accounts', subtitle: 'Business accounts and contacts', storyDesc: 'As an account manager, I want to manage business accounts so that I can grow my customer relationships.\n- View account hierarchies and subsidiary relations\n- Track account health score and contract status\n- View aggregate account revenue\n- Map key decision-makers within accounts' },
                    { id: 'opportunity-pipeline', label: 'Opportunity Pipeline', path: '/crm/opportunities/pipeline', subtitle: 'Active deals and stages', storyDesc: 'As a sales user, I want to manage my opportunities so that I can close deals.\n- View drag-and-drop kanban board of deals\n- Set deal values and expected close dates\n- Update deal status and probability\n- Move deals across stages' },
                    { id: 'deal-tracking', label: 'Deal Tracking', path: '/crm/opportunities/deals', subtitle: 'Monitor deal progress', storyDesc: 'As a sales manager, I want to track deals so that I can identify stalled opportunities.\n- View "stale" deal alerts (no activity in N days)\n- Compare deal progress vs historical benchmarks\n- View next steps for each opportunity\n- Audit deal stage changes' },
                    { id: 'sales-stages', label: 'Sales Stages', path: '/crm/opportunities/stages', subtitle: 'Configure pipeline stages', storyDesc: 'As a sales administrator, I want to define sales stages so that the system reflects our process.\n- Create stages like Discovery, Proposal, Negotiation\n- Set probability percentages per stage\n- Define mandatory activities for stage gates' },
                ]
            },
            {
                id: 'sales-quote-mgmt', label: 'Sales & Quotes',
                children: [
                    { id: 'sales-pipeline-view', label: 'Sales Pipeline View', path: '/crm/sales/pipeline', subtitle: 'Visual pipeline board', storyDesc: 'As a sales leader, I want a visual pipeline so that I can see the overall health of the business.\n- View weighted pipeline value per month\n- Drill down into specific regions or teams\n- View historical conversion trends from the board\n- Toggle between list and board views' },
                    { id: 'quote-creation', label: 'Quote Creation', path: '/crm/sales/quotes', subtitle: 'Create and send quotes', storyDesc: 'As a sales rep, I want to generate professional quotes so that I can win business.\n- Select items from catalog with pre-set pricing\n- Apply volume or relationship discounts\n- Generate PDF in multiple templates (F8)\n- Track quote status (Sent, Viewed, Signed)' },
                    { id: 'price-mgmt', label: 'Price Management', path: '/crm/sales/pricing', subtitle: 'Customer pricing rules', storyDesc: 'As a sales administrator, I want to manage pricing so that we maintain profit margins.\n- Define price lists and tiers\n- Set promotional pricing and bundles\n- Configure pricing approval workflows\n- Review margin analysis per quote' },
                    { id: 'deal-conversion', label: 'Deal Conversion', path: '/crm/sales/conversion', subtitle: 'Convert deals to orders', storyDesc: 'As an order specialist, I want to convert won deals to sales orders efficiently.\n- Auto-populate sales order from quoted items\n- Sync customer and billing data\n- Trigger notification to delivery/finance team\n- Close opportunity as Won' },
                ]
            },
            {
                id: 'marketing-campaign', label: 'Marketing & Campaign',
                children: [
                    { id: 'campaign-creation', label: 'Campaign Creation', path: '/crm/marketing/create', subtitle: 'Build marketing campaigns', storyDesc: 'As a marketing user, I want to build campaigns so that I can generate new leads.\n- Define campaign goals and budget\n- Create multi-channel campaigns (Email, Web, Social)\n- Set campaign dates and target audience\n- Assign campaign leads to teams' },
                    { id: 'email-marketing', label: 'Email Marketing', path: '/crm/marketing/email', subtitle: 'Email blasts and sequences', storyDesc: 'As a marketer, I want to send email campaigns so that I can nurture my leads.\n- Create email templates with dynamic fields\n- Build automated nurture sequences\n- Segment audiences for targeted blasts\n- Track open and click-through rates' },
                    { id: 'campaign-tracking', label: 'Campaign Tracking', path: '/crm/marketing/tracking', subtitle: 'ROI and campaign metrics', storyDesc: 'As a marketing manager, I want to track campaign ROI so that I can allocate budget wisely.\n- Track leads and revenue attributed to campaign\n- View cost per lead and cost per acquisition\n- Compare performance across channels\n- Export marketing attribution reports' },
                    { id: 'lead-nurturing', label: 'Lead Nurturing', path: '/crm/marketing/nurturing', subtitle: 'Automated nurture flows', storyDesc: 'As a marketing user, I want to build automated flows so that I can nurture leads at scale.\n- Define triggers for flow entry\n- Build branching logic based on lead activity\n- Auto-send emails and assign tasks\n- Monitor flow effectiveness' },
                ]
            },
            {
                id: 'service-support', label: 'Service & Support',
                children: [
                    { id: 'ticket-system', label: 'Ticket System', path: '/crm/support/tickets', subtitle: 'Raise and track support tickets', storyDesc: 'As a customer service rep, I want to manage support tickets so that I can resolve customer issues.\n- Create tickets from email, chat, or phone\n- Set ticket priority and type\n- Route tickets to expert groups\n- Track resolution time (SLA)' },
                    { id: 'case-mgmt', label: 'Case Management', path: '/crm/support/cases', subtitle: 'Manage escalated cases', storyDesc: 'As a support manager, I want to manage escalations so that complex issues are resolved.\n- Escalate tickets to engineering or management\n- Track case resolution multi-step process\n- Link related tickets to a single case\n- View case resolution history' },
                    { id: 'knowledge-base', label: 'Knowledge Base', path: '/crm/support/kb', subtitle: 'Self-service articles', storyDesc: 'As a support specialist, I want to build a knowledge base so that customers can help themselves.\n- Author and publish support articles\n- Tag articles for search optimization\n- Track article helpfulness and views\n- Embed KB widget in customer portal' },
                    { id: 'customer-feedback', label: 'Customer Feedback', path: '/crm/support/feedback', subtitle: 'CSAT and NPS collection', storyDesc: 'As a support manager, I want to gather customer feedback so that I can improve service.\n- Send automated survey after ticket resolution\n- Track CSAT and NPS scores\n- Analyze sentiment trends\n- Flag negative feedback for management follow-up' },
                ]
            },
            {
                id: 'comm-activities', label: 'Communication',
                children: [
                    { id: 'call-email-log', label: 'Call & Email Logging', path: '/crm/communication/logs', subtitle: 'Log calls and emails', storyDesc: 'As a sales rep, I want to log my communications so that I have a record of interactions.\n- Record call outcome, duration, and notes\n- Sync sent/received emails automatically\n- Attach recordings or email transcripts\n- Tag records for follow-up' },
                    { id: 'task-mgmt', label: 'Task Management', path: '/crm/communication/tasks', subtitle: 'To-dos and follow-ups', storyDesc: 'As a sales rep, I want to manage my tasks so that I don\'t miss follow-ups.\n- Create tasks linked to leads/accounts\n- Set due dates and priority\n- Receive notifications for upcoming tasks\n- Mark tasks as complete after action' },
                    { id: 'meeting-notes', label: 'Meeting Notes', path: '/crm/communication/meetings', subtitle: 'Record meeting outcomes', storyDesc: 'As a sales rep, I want to record meeting notes so that the team is informed of next steps.\n- Capture attendees and key discussion points\n- Link notes to specific opportunities\n- Assign follow-up tasks from notes\n- Share notes with account teams' },
                    { id: 'activity-timeline', label: 'Activity Timeline', path: '/crm/communication/timeline', subtitle: 'Full contact activity history', storyDesc: 'As an account manager, I want to see a full activity timeline so that I am prepared for meetings.\n- View chronological list of all interactions\n- Filter timeline by activity type or user\n- Search within interaction notes\n- Visualize interaction density over time' },
                ]
            },
            {
                id: 'crm-reports-admin', label: 'Reports & Admin',
                children: [
                    { id: 'sales-reports', label: 'Sales Reports', path: '/crm/admin/reports', subtitle: 'Pipeline and revenue reports', storyDesc: 'As a manager, I want a suite of CRM reports so that I can track performance.\n- Build sales forecasting reports\n- View lead source and conversion analysis\n- Track quota attainment per rep\n- Schedule reports for weekly delivery' },
                    { id: 'crm-user-mgmt', label: 'User Management', path: '/crm/admin/users', subtitle: 'CRM users and roles', storyDesc: 'As a CRM admin, I want to manage users so that the system remains secure.\n- Create CRM users and assign to teams/regions\n- Define roles and granular permissions\n- Manage seat licenses and access logs' },
                    { id: 'crm-settings', label: 'System Settings', path: '/crm/admin/settings', subtitle: 'CRM configuration', storyDesc: 'As a CRM admin, I want to configure the system to match our terminology.\n- Define custom fields and objects\n- Configure global search and picklist values\n- Set email and calendar integration parameters' },
                    { id: 'data-import', label: 'Data Import-Export', path: '/crm/admin/import', subtitle: 'Bulk data operations', storyDesc: 'As a data manager, I want to import/export CRM data so that it remains current.\n- Import leads and contacts from CSV/Excel\n- Perform data deduplication and cleanup\n- Export CRM data for external analysis' },
                ]
            }
        ]
    },

    {
        id: 'hrm', label: 'Human Resources',
        children: [
            {
                id: 'hr-dashboards', label: 'Dashboards & Reports',
                children: [
                    { id: 'hr-dashboard', label: 'HR Dashboard', path: '/hr/dashboard', subtitle: 'People metrics at a glance', storyDesc: 'Central personnel dashboard with headcount trends, attrition alerts, and key compliance KPIs. Integrated with real-time payroll data.' },
                    { id: 'analytics-reports', label: 'Analytics Reports', path: '/hr/reports/analytics', subtitle: 'Workforce data and trends', storyDesc: 'As an HR manager, I want workforce analytics so that I can plan for the future.\n- View attrition rates by department/tenure\n- Analyze workforce diversity and inclusion\n- View labor cost trends\n- Predict future turnover' },
                    { id: 'compliance-reports', label: 'Compliance Reports', path: '/hr/reports/compliance', subtitle: 'Statutory and audit reports', storyDesc: 'As an HR admin, I want compliance reports so that we meet legal requirements.\n- Generate equal opportunity (EEO) reports\n- View mandatory training completion rates\n- Track statutory filing status\n- Audit data privacy compliance' },
                    { id: 'custom-reports', label: 'Custom Reports', path: '/hr/reports/custom', subtitle: 'Build your own HR reports', storyDesc: 'As an HR user, I want to build custom reports for ad-hoc queries.\n- Pick from all employee data fields\n- Save report templates\n- Schedule automated delivery to management' },
                ]
            },
            {
                id: 'employee-mgmt', label: 'Employee Management',
                children: [
                    { id: 'employee-records', label: 'Employee Records', path: '/hr/employees/records', subtitle: 'Full employee data and history', storyDesc: 'Master employee database with digital dossiers. Support for multi-document attachments (F6), history tracking, and org-chart mapping.' },
                    { id: 'org-chart', label: 'Organizational Chart', path: '/hr/employees/org-chart', subtitle: 'Company hierarchy view', storyDesc: 'As an employee, I want to see the company hierarchy so that I understand the reporting structure.\n- Interactive tree view of the entire organization\n- View profile cards on the chart\n- Search and zoom functionally' },
                    { id: 'profile-view', label: 'Profile View', path: '/hr/employees/profile', subtitle: 'Individual employee profile', storyDesc: 'As an employee, I want to manage my profile so that my information is up to date.\n- View and update contact details and social links\n- View job details, history, and compensation\n- Upload and view official documents' },
                ]
            },
            {
                id: 'talent-onboarding', label: 'Talent & Onboarding',
                children: [
                    { id: 'app-capture', label: 'Application Capture', path: '/hr/talent/applications', subtitle: 'Collect job applications', storyDesc: 'As a recruiter, I want to collect applications so that I can start the hiring process.\n- Capture applications from job boards and portal\n- Parse resumes automatically for key data\n- Store candidate profiles' },
                    { id: 'screening', label: 'Screening', path: '/hr/talent/screening', subtitle: 'Filter and shortlist candidates', storyDesc: 'As a recruiter, I want to screen candidates so that I find the best fit.\n- Apply automated filters based on skills/experience\n- Score candidates during initial phone screen\n- Move candidates to shortlist for interviews' },
                    { id: 'interview-scheduling', label: 'Interview Scheduling', path: '/hr/talent/interviews', subtitle: 'Schedule and track interviews', storyDesc: 'As a recruiter, I want to schedule interviews so that I can manage the hiring flow.\n- Sync with interviewer calendars\n- Send automated invites to candidates\n- Collect interviewer scorecard feedback' },
                    { id: 'offer-mgmt', label: 'Offer Management', path: '/hr/talent/offers', subtitle: 'Generate and send offer letters', storyDesc: 'As an HR manager, I want to manage job offers so that we secure top talent.\n- Generate offers from templates with dynamic terms\n- Track offer approval workflow\n- Monitor offer acceptance and rejection rates' },
                    { id: 'new-hire', label: 'New Hire Setup', path: '/hr/talent/new-hire', subtitle: 'Onboard new employees', storyDesc: 'As a hiring manager, I want to setup new hires so that they have a great first day.\n- Create onboarding checklists\n- Provision systems and equipment\n- Assign onboarding buddies' },
                ]
            },
            {
                id: 'comp-payroll', label: 'Compensation & Payroll',
                children: [
                    { id: 'salary-structures', label: 'Salary Structures', path: '/hr/payroll/structures', subtitle: 'Define pay grades and bands', storyDesc: 'As a compensation manager, I want to define salary structures so that pay is consistent.\n- Create pay grades and salary bands\n- Define pay components (Basic, HRA, Allowance)\n- Track market benchmarks' },
                    { id: 'tax-calc', label: 'Tax Calculations', path: '/hr/payroll/tax', subtitle: 'Income tax and deductions', storyDesc: 'As a payroll admin, I want to calculate taxes so that payroll is accurate.\n- Handle different tax regimes\n- Calculate deductions for insurance and savings\n- Generate tax summaries' },
                    { id: 'payroll-run', label: 'Payroll Run', path: '/hr/payroll/run', subtitle: 'Process monthly payroll', storyDesc: 'Execute multi-step payroll processing. Batch validation, tax computation, and automated payslip generation. Integrated with Time & Attendance.' }
                ]
            },
            {
                id: 'time-attendance', label: 'Time & Attendance',
                children: [
                    { id: 'clock-in-out', label: 'Clock-In/Out', path: '/hr/time/clock', subtitle: 'Daily attendance tracking', storyDesc: 'As an employee, I want to log my attendance so that my hours are recorded.\n- Capture punch-in/out via web or mobile\n- Handle manual attendance requests\n- View daily and weekly attendance records' },
                    { id: 'timesheets', label: 'Timesheets', path: '/hr/time/timesheets', subtitle: 'Weekly timesheet entry', storyDesc: 'As an employee, I want to enter my weekly timesheet so that I am paid for my work.\n- Record hours against projects or tasks\n- Submit weekly timesheets for approval\n- Track billable vs non-billable hours' },
                    { id: 'approval-workflow', label: 'Approval Workflow', path: '/hr/time/approvals', subtitle: 'Manager approval queue', storyDesc: 'As a manager, I want an approval queue so that I can approve time logs.\n- View pending attendance and timesheet requests\n- Approve or reject with comments\n- Track approval history' },
                ]
            },
            {
                id: 'perf-goals', label: 'Performance & Goals',
                children: [
                    { id: 'goal-setting', label: 'Goal Setting', path: '/hr/performance/goals', subtitle: 'Set OKRs and KPIs', storyDesc: 'As an employee, I want to set my goals so that I have clear objectives.\n- Define OKRs and KPIs\n- Link goals to company objectives\n- Track goal progress throughout the period' },
                    { id: 'perf-reviews', label: 'Performance Reviews', path: '/hr/performance/reviews', subtitle: 'Annual and mid-year reviews', storyDesc: 'As a manager, I want to conduct reviews so that I can provide feedback.\n- Use custom review templates\n- Support for self-evaluations\n- Consolidate feedback into final rating' },
                    { id: 'feedback-360', label: '360-Degree Feedback', path: '/hr/performance/feedback', subtitle: 'Peer and manager feedback', storyDesc: 'As an HR manager, I want 360 feedback so that we have a holistic view of performance.\n- Request feedback from peers and direct reports\n- Anonymize responses for open feedback\n- Generate 360 feedback reports' },
                    { id: 'dev-plans', label: 'Development Plans', path: '/hr/performance/development', subtitle: 'Career growth roadmaps', storyDesc: 'As an employee, I want a development plan so that I can grow in my career.\n- Identify skill gaps and learning needs\n- Set development milestones\n- Link learning resources to plan' },
                ]
            },
            {
                id: 'learning', label: 'Learning',
                children: [
                    { id: 'training-programs', label: 'Training Programs', path: '/hr/learning/programs', subtitle: 'Instructor-led and online programs', storyDesc: 'As a learning admin, I want to manage training programs so that employees gain new skills.\n- Create and schedule training cohorts\n- Manage instructor and venue data\n- Track program attendance and completion' },
                    { id: 'course-catalog', label: 'Course Catalog', path: '/hr/learning/catalog', subtitle: 'Browse available courses', storyDesc: 'As an employee, I want to browse courses so that I can sign up for learning.\n- Filter courses by category and skill\n- View course descriptions and prerequisites\n- Self-enroll in available courses' },
                    { id: 'learning-paths', label: 'Learning Paths', path: '/hr/learning/paths', subtitle: 'Role-based learning journeys', storyDesc: 'As an HR manager, I want to define learning paths so that employees have a clear journey.\n- Bundle courses into role-based paths (e.g., Sales 101)\n- Set path completion targets\n- Monitor path progress across teams' },
                    { id: 'certifications', label: 'Certifications', path: '/hr/learning/certifications', subtitle: 'Track and issue certifications', storyDesc: 'As an HR manager, I want to track certifications so that we maintain quality standards.\n- Set certification expiry and renewal rules\n- Issue digital certificates upon completion\n- Track company-wide certification status' },
                ]
            },
            {
                id: 'engagement', label: 'Engagement',
                children: [
                    { id: 'surveys', label: 'Surveys', path: '/hr/engagement/surveys', subtitle: 'Pulse and engagement surveys', storyDesc: 'As an HR manager, I want to run surveys so that I can measure company culture.\n- Create pulse and annual engagement surveys\n- Maintain respondent anonymity\n- Analyze survey results and sentiment' },
                    { id: 'recognition', label: 'Recognition Programs', path: '/hr/engagement/recognition', subtitle: 'Reward and recognize employees', storyDesc: 'As an employee, I want to recognize my peers so that we build a positive culture.\n- Give peer-to-peer awards and shout-outs\n- Link recognition to company values\n- View company-wide recognition wall' },
                    { id: 'wellness', label: 'Wellness Programs', path: '/hr/engagement/wellness', subtitle: 'Health and wellness initiatives', storyDesc: 'As an HR manager, I want to manage wellness programs so that employees are healthy.\n- Track participation in wellness challenges\n- Link wellness activities to rewards\n- Monitor company-wide wellness and stress levels' },
                    { id: 'events', label: 'Events', path: '/hr/engagement/events', subtitle: 'Team events and activities', storyDesc: 'As an HR admin, I want to manage events so that employees stay engaged.\n- Schedule and manage company-wide events\n- Track event RSVPs and attendance\n- Share event photos and summaries' },
                ]
            },
            {
                id: 'workforce-planning', label: 'Workforce Planning',
                children: [
                    { id: 'headcount', label: 'Headcount Planning', path: '/hr/workforce/headcount', subtitle: 'Plan team size and structure', storyDesc: 'As a manager, I want to plan my headcount so that I meet business goals.\n- Request new hires based on department budget\n- Model different organization structures\n- Track open headcount vs filled positions' },
                    { id: 'succession', label: 'Succession Planning', path: '/hr/workforce/succession', subtitle: 'Identify future leaders', storyDesc: 'As an HR manager, I want a succession plan so that we are prepared for leadership changes.\n- Identify critical roles and potential successors\n- Gauge successor readiness (Ready Now/1-2 Years)\n- Link development plans to successors' },
                    { id: 'skills-gap', label: 'Skills Gap Analysis', path: '/hr/workforce/skills-gap', subtitle: 'Identify missing competencies', storyDesc: 'As an HR manager, I want to see skills gaps so that I can bridge them through hiring or training.\n- Map required skills per role\n- Assess current employee skill levels\n- Generate gap reports and hiring/training needs' },
                    { id: 'wf-analytics', label: 'Workforce Analytics', path: '/hr/workforce/analytics', subtitle: 'Headcount and attrition trends', storyDesc: 'As a CHO, I want analytics so that I can make data-driven people decisions.\n- View attrition and retention trends\n- View average tenure per department\n- Correlate performance with tenure and department' },
                ]
            },
            {
                id: 'hr-compliance', label: 'Compliance',
                children: [
                    { id: 'policy-mgmt', label: 'Policy Management', path: '/hr/compliance/policies', subtitle: 'HR policies and handbooks', storyDesc: 'As an HR admin, I want to manage policies so that they are easily accessible.\n- Store and version control all HR policies\n- Track employee acknowledgment of handbooks\n- Set review dates for periodic updates' },
                    { id: 'compliance-training', label: 'Compliance Training', path: '/hr/compliance/training', subtitle: 'Mandatory training programs', storyDesc: 'As an HR manager, I want to track compliance training so that we meet regulations.\n- Assign mandatory courses (e.g., Anti-harassment)\n- Track completion status and send reminders\n- Generate compliance audit logs' },
                    { id: 'audit-mgmt', label: 'Audit Management', path: '/hr/compliance/audit', subtitle: 'HR audit trails and logs', storyDesc: 'As an HR auditor, I want an audit trail so that I can verify data security.\n- View history of all data changes and who made them\n- Track report access and downloads\n- Flag suspicious data access patterns' },
                    { id: 'compliance-reporting', label: 'Reporting', path: '/hr/compliance/reporting', subtitle: 'Statutory compliance reports', storyDesc: 'As an HR manager, I want statutory reports so that we are compliant with labor laws.\n- Automatically generate reports for labor board\n- View status of all mandatory filings\n- Maintain digital copies of all submitted reports' },
                ]
            },
            {
                id: 'offboarding', label: 'Offboarding',
                children: [
                    { id: 'resignation', label: 'Resignation Process', path: '/hr/offboarding/resignation', subtitle: 'Handle resignation requests', storyDesc: 'As an HR manager, I want to manage resignations so that the process is smooth.\n- Submit and track resignation requests\n- Conduct approval workflow for notice period\n- Initiate automated offboarding sequence' },
                    { id: 'exit-interviews', label: 'Exit Interviews', path: '/hr/offboarding/interviews', subtitle: 'Capture exit feedback', storyDesc: 'As an HR manager, I want to capture exit feedback so that we can reduce attrition.\n- Schedule and record exit interview data\n- Analyze reasons for leaving\n- Anonymize and aggregate exit insights' },
                    { id: 'asset-return', label: 'Asset Return', path: '/hr/offboarding/assets', subtitle: 'Track returned company assets', storyDesc: 'As an IT manager, I want to track asset return so that we don\'t lose equipment.\n- View list of all assets assigned to the employee\n- Mark assets as returned, damaged, or lost\n- Trigger final settlement only after asset clearance' },
                    { id: 'offboarding-checklist', label: 'Offboarding Checklist', path: '/hr/offboarding/checklist', subtitle: 'Step-by-step exit process', storyDesc: 'As an HR admin, I want a checklist so that no offboarding step is missed.\n- Standard task list for HR, IT, and Finance\n- Track completion of each task\n- Send automated reminders to task owners' },
                ]
            },
            {
                id: 'hr-security', label: 'Security',
                children: [
                    { id: 'role-access', label: 'Role-Based Access', path: '/hr/security/roles', subtitle: 'Manage HR module permissions', storyDesc: 'As a system admin, I want to manage HR roles so that we protect sensitive personnel data.\n- Define granular field-level permissions for HR data\n- Assign users to predefined HR roles\n- Audit role permission changes' },
                    { id: 'security-logs', label: 'Audit Logs', path: '/hr/security/logs', subtitle: 'Security and access audit trail', storyDesc: 'As a security officer, I want to see audit logs so that I can detect unauthorized access.\n- View who accessed sensitive data like compensation\n- Track failed login attempts within the HR module\n- Monitor bulk data exports' },
                ]
            },
            {
                id: 'hr-integrations', label: 'Integrations',
                children: [
                    { id: 'erp-connector', label: 'ERP Connector', path: '/hr/integrations/erp', subtitle: 'Sync with ERP systems', storyDesc: 'As a system admin, I want to sync with ERP so that we maintain data consistency.\n- Sync employee cost data to ERP ledgers\n- Share project and department codes across systems\n- Manage bi-directional sync schedules' },
                    { id: 'payroll-integration', label: 'Payroll Integration', path: '/hr/integrations/payroll', subtitle: 'Connect payroll providers', storyDesc: 'As a finance manager, I want to integrate with payroll so that payment is streamlined.\n- Export payroll run to bank file format\n- Sync journal entries to accounting platform\n- Handle automated tax payments' },
                    { id: 'background-check', label: 'Background Check', path: '/hr/integrations/background', subtitle: 'Third-party verification', storyDesc: 'As a recruiter, I want to integrate background checks so that we hire verified talent.\n- Trigger automated checks from our hiring flow\n- Receive and store check results on the employee record\n- Flag candidates with verification issues' },
                    { id: 'sso', label: 'Single Sign-On', path: '/hr/integrations/sso', subtitle: 'SSO and identity providers', storyDesc: 'As an IT admin, I want SSO for HR so that the system is easy to access.\n- Supports SAML and OAuth providers\n- Auto-provision users during their first login\n- Sync user activation/deactivation' },
                    { id: 'benefits-provider', label: 'Benefits Provider', path: '/hr/integrations/benefits', subtitle: 'Insurance and benefits sync', storyDesc: 'As an HR manager, I want to sync with benefits providers so that employees are covered.\n- Send employee files to insurance company automatically\n- Sync benefit plan data to employee payroll records\n- Track open enrollment periods' },
                ]
            },
            {
                id: 'ai-assistant', label: 'AI Assistant',
                children: [
                    { id: 'hr-chatbot', label: 'HR Chatbot', path: '/hr/ai/chatbot', subtitle: 'AI-powered HR assistant', storyDesc: 'As an employee, I want an HR chatbot so that I can get my questions answered 24/7.\n- Answers questions about leave and policies\n- Helps with self-service tasks like requesting time off\n- Provides initial support for HR queries' },
                    { id: 'smart-recs', label: 'Smart Recommendations', path: '/hr/ai/recommendations', subtitle: 'AI-driven HR insights', storyDesc: 'As an HR manager, I want smart recommendations so that I can improve personnel decisions.\n- Recommends training based on skill gaps\n- Suggests potential internal moves for open roles\n- Predicts attrition risk based on engagement' },
                ]
            },
            {
                id: 'hr-templates', label: 'Templates',
                children: [
                    { id: 'task-list', label: 'HRM TaskList', path: '/hr/templates/tasks', subtitle: 'Standard HR task checklists', storyDesc: 'As an HR user, I want task templates so that I can manage processes efficiently.\n- Build reusable task lists for any HR process\n- Assign default task owners and timelines\n- Clone templates for new hires or exits' },
                    { id: 'doc-templates', label: 'Document Templates', path: '/hr/templates/documents', subtitle: 'Letters, contracts and forms', storyDesc: 'As an HR manager, I want document templates so that we have consistent communications.\n- Create letter templates with dynamic tags\n- Manage contracts and policy documents\n- Generate PDFs for signed agreements' },
                ]
            },
        ]
    }
];
