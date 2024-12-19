import { BudgetsWidget } from "~/features/budgets/components/BudgetsWidget";
import { KPIWidget } from "~/components/shared/KPIWidget";
import { PotsWidget } from "~/features/pots/components/PotsWidget";
import { RecurringWidget } from "~/features/recurring/components/RecurringWidget";
import { TransactionWidget } from "~/features/transactions/components/TransactionWidget";


const Index = () => {
  return (
    <div>
      <div className="pf-kpis flex space-between w-full gap-4 p-4">
        <KPIWidget title="Current Balance" value={600} color="black" />
        <KPIWidget title="Total Revenue" value={3000} color="white" />
        <KPIWidget title="Total Expenses" value={2400} color="white" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <PotsWidget pots={[
          { 'amount': 1000, 'name': 'Emergency Fund', 'color': 'green' },
          { 'amount': 2000, 'name': 'Vacation Fund', 'color': 'red' },
          { 'amount': 3000, 'name': 'New Car Fund', 'color': 'pink' },
        ]}
          totalSavings={6000}
          seeDetailsUrl="/pots" />

        <TransactionWidget seeDetailsUrl="/transactions"
          transactions={
            [
              { amount: 100, date: '2021-01-01', name: 'Salary', icon: `/avatars/bytewise.jpg` },
              { amount: 1000, date: '2021-01-01', name: 'Salary2', icon: `/avatars/bytewise.jpg` },
              { amount: 500, date: '2021-01-01', name: 'Salary3', icon: `/avatars/bytewise.jpg` },
            ]
          }
        />
        <BudgetsWidget
          seeDetailsUrl="/budgets"
          totalBudget={1000}
          totalSpent={450}
          budgets={[
            { name: "Groceries", amount: 300 },
            { name: "Entertainment", amount: 50 },
            { name: "Transport", amount: 100 },
          ]}
        />

        <RecurringWidget
          bill={[
            { 'amount': 1000, 'name': 'Emergency Fund', 'color': 'green' },
            { 'amount': 2000, 'name': 'Vacation Fund', 'color': 'red' },
            { 'amount': 3000, 'name': 'New Car Fund', 'color': 'pink' },
          ]}
          seeDetailsUrl="/recurring"
        />
      </div>

    </div>
  );
};

export default Index;