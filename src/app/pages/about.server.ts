import { PageServerLoad } from "@analogjs/router";

export const load = async ({

}: PageServerLoad) => {

    const edge = !!((globalThis as any)?.EdgeRuntime); 

    return {
        loaded: true,
        edge
    };
};