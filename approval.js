$(document).ready(

    function () {
        $("#results").click(approved);


    })

    function approved() {

        var salary = $("#salary").val();

        var score = $("#score").val();

        var months = $("#months").val();


        if (salary >= 40000 && score >= 600) {
            $("#output").text(`Approved`);
        }

        if (salary >= 40000 && score < 600 && months > 12) {
            $("#output").text(`Approved`);
        }

        else if (salary >= 40000 && score < 600 && months <= 12) {
            $("#output").text(`Rejected`);
        }

        if (salary < 40000 && score >= 600 && months > 12) {
            $("#output").text(`Approved`);
        }

       else if (salary < 40000 && score >= 600 && months <= 12) {
            $("#output").text(`Rejected`);
        }

        if (salary < 40000 && score < 600) {
            $("#output").text(`Rejected`);
        }

    };