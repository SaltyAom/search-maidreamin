/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
        constructor();
    }

    export default WebpackWorker;
}