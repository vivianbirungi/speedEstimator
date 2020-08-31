import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    plateNumbers: any;
    invoices: any;
    pendingInvoices = [] as any;
    paidInvoices = [] as any;
    paid = 0;
    constructor(public platedata: DashboardService) {}
    ngOnInit() {
        this.getLicencePlates();
        this.getInvoices();
    }

    getLicencePlates() {
        this.platedata.getLicencePlates().subscribe((data: any) => {
            if (data.status) {
                this.plateNumbers = data.data;
                console.log(this.plateNumbers);
            }
        });
    }
    getInvoices() {
        this.platedata.getInvoices().subscribe((data: any) => {
            if (data.status) {
                this.invoices = data.data;
                this.groupInvoices(data.data);
                console.log(data);
            }
        });
    }
    groupInvoices(item: any) {
        item.map((data: any) => {
            console.log(data.status);
            if (data.status.replace(' ', '') == 'pending') {
                this.pendingInvoices.push(data);
                console.log(this.pendingInvoices);
            } else if (data.status.replace(' ', '') == 'paid') {
                this.paidInvoices.push(data);
                this.paid = this.paidInvoices.length;
                console.log(this.paidInvoices.length);
            }
            // switch (data.status) {
            //     case 'pending': {
            //         this.pendingInvoices.push(data);
            //         console.log(this.pendingInvoices);
            //     }

            //     case 'paid': {
            //         this.paidInvoices.push(data);
            //     }
            // }
        });
        console.log(this.paidInvoices);
    }
}
