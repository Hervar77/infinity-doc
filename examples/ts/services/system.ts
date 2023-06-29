// services/system.ts
infinity.loadModule( 'infinity.session' );

namespace system {

    export function shutdown() {
        let session: any = infinity.session.get();

        if ( !session ) {
            throw 'Unauthorized';
        }

        console.info( 'User "' + session.username + '" is shutting down the server.' );
        infinity.terminate();
    }

}
