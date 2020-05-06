import {createSelect} from "./CreateSelectClause";

describe('Create Select', () => {
    it('generate basic select statement for table', () => {
        const sql = createSelect('product', ['name']);
        expect(sql).toEqual('Select product.name from product');
    });
})