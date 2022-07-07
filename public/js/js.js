
console.log("js loaded");

window.onload = () => {

    ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .catch( error => {
            console.error( error );
        } );

}
