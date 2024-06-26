import { DeliveryService } from './delivery.service';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
export declare class DeliveryController {
    private readonly deliveryService;
    constructor(deliveryService: DeliveryService);
    makeDelivery(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise<{
        message: string;
        inventoryUpdate: string;
        order: import("../../order/entities/order.entity").Order;
    }>;
    findOne(id: string): Promise<import("../../order/entities/order.entity").Order>;
    returnDelivery(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise<{
        message: string;
        inventoryUpdate: string;
        order: import("../../order/entities/order.entity").Order;
    }>;
    findAll(): Promise<import("../../order/entities/order.entity").Order[]>;
}
