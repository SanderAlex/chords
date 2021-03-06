$(document).ready(function() {

	var canvas = document.getElementById('chordCanvas');
    var context = canvas.getContext('2d');
    var unitX;
    var unitY;
    var chord;
    var chordVar, currentChord, currentChordIndex, chordGrid, fingers;

    $("#chordSelector").change(pickChord);
    $("#subChordSelector").change(pickChord);
    $(canvas).swiperight(prevVar);
    $(canvas).swipeleft(nextVar);
    $("#allVariants").tap(varShow);

    resizeCanvas();
 
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.75;
        unitX = canvas.width/7;
        unitY = canvas.height/7;
        drawGuitar(0, 0);
        for(i = 1; i <= 6; i++)
            drawCross(i);      
    }

    function pickChord() {
        var noteInd;
        chord = $("select#chordSelector").val() + $("select#subChordSelector").val();

        chordVar = chords[chord];
        currentChordIndex = 0;
        setArray();

        $("#playButton").removeClass("ui-disabled");
        $("#allVariants").removeClass("ui-disabled");
    }

    function prevVar() {
        if(currentChordIndex != 0) {
            currentChordIndex--;
            setArray();
        }
    }

    function nextVar() {
        if(currentChordIndex != chordVar.length - 1) {
            currentChordIndex++;
            setArray();
        } 
    }

    function buildChord() {
        strings = ["E0","A0","D1","G1","B1","E2"];
        for(i = 0; i < chordGrid.length; i++) {
            if(chordGrid[i] == null)
                strings[i] = null;
            else {
                noteInd = $.inArray(strings[i], notes);
                strings[i] = notes[noteInd + chordGrid[i]];
            }
        }          
    }

    function setArray() {
        currentChord = chordVar[currentChordIndex];
        chordGrid = currentChord[0];
        fingers = currentChord[1];
        buildChord();
        drawFinger(chordGrid, fingers);
        drawNotes();       
    }

    function drawGuitar(min, max) { //отрисовка сетки грифа
        context.clearRect(0, 0, canvas.width, canvas.height);
        //основа
        context.beginPath();
        context.strokeRect(unitX, unitY, unitX*5, unitY*5);

        //отрисовка порожка
        if(max <= 5) {
            context.beginPath();
            context.moveTo(unitX, unitY);
            context.lineTo(unitX*6, unitY);
            context.lineWidth = unitX/20;
            context.stroke();
            context.lineWidth = 1;
        }
        else {
            context.font = unitY*0.6 + "px Arial";
            context.textAlign = "center";
            context.fillText(min, unitX/3, unitY*1.75, unitX*0.6);
        }
        
        //отрисовка ладов и струн
        for(i = 2; i < 6; i++) {
            context.beginPath();
            context.moveTo(unitX*i, unitY);
            context.lineTo(unitX*i, unitY*6);
            context.moveTo(unitX, unitY*i);
            context.lineTo(unitX*6, unitY*i);
            context.stroke();
        }
    }

    function drawCross(k) { //отрисовка незвучащей струны
        context.beginPath();
        context.moveTo(k*unitX - unitX/3, unitY/4);
        context.lineTo(k*unitX + unitX/3, unitY - unitY/4);
        context.moveTo(k*unitX + unitX/3, unitY/4);
        context.lineTo(k*unitX - unitX/3, unitY - unitY/4);
        context.stroke();
    }

    function drawFinger(arr, fing) {
        var tab = 0;
        var min = 0;
        var max = Math.max.apply(Math, arr);
        //проверяем позицию
        if(max > 5) {
            min = 50;
            for(i = 0; i < arr.length; i++) {
                if(arr[i] != null && arr[i] != 0 && arr[i] < min)
                    min = arr[i];
            }
            tab = min - 1;
        }
        drawGuitar(min, max);

        for(i = 0; i < arr.length; i++) {
            //отрисовка баре
            if(fing[i] != null) {
                for(j = i + 1; j < fing.length; j++) {
                    if(fing[i] == fing[j]) {
                        context.beginPath();
                        context.moveTo(unitX*i + unitX, (arr[i] - tab)*unitY + unitY - unitY/2);
                        context.lineTo(unitX*j + unitX, (arr[i] - tab)*unitY + unitY - unitY/2);
                        context.lineWidth = unitY/3*2;
                        context.stroke();
                    }
                }
            }
            context.lineWidth = 1;
            //отрисовка позиций пальцев
            if(arr[i] == null)
                drawCross(i + 1);
            else {
                if(arr[i] == 0) {
                    context.beginPath();
                    context.arc(unitX*i + unitX, unitY/2, unitY/3, 0, Math.PI*2, false);
                    context.stroke();                
                }
                else {
                    context.beginPath();
                    context.arc(unitX*i + unitX, (arr[i] - tab)*unitY + unitY - unitY/2, unitY/3, 0, Math.PI*2, false);
                    context.fill();
                    context.font = unitY*0.5 + "px Arial";
                    context.textAlign = "center";
                    context.fillStyle = "#fff";
                    context.fillText(fing[i], unitX*i + unitX, (arr[i] - tab)*unitY + unitY - unitY/3, unitX*0.6);
                    context.fillStyle = "#000";
                }
            }    
        }
    }

    function drawNotes() {
        for(i = 0; i < strings.length; i++) {
            if (strings[i] != null) {
                var note = strings[i][0];
                if(strings[i][1] == "d")
                    note += "#";
                context.fillText(note, unitX*i + unitX, unitY*6.5, unitX*0.6);
            }
        }
    }

    function varShow() {
        $("#allVars").empty();
        var miniCanvas;
        for(var i = 0; i < chordVar.length; i++) {
            $("#allVars").append("<canvas class='canvasMini' id='" + i + "'></canvas>");
            miniCanvas = document.getElementById(i);
            context = miniCanvas.getContext('2d');
            miniCanvas.width = window.innerWidth/3-4;
            miniCanvas.height = miniCanvas.width;
            unitX = miniCanvas.width/7;
            unitY = miniCanvas.height/7;
            drawFinger(chordVar[i][0], chordVar[i][1]);
        }
        $('#' + currentChordIndex).addClass("picked");
        $(".canvasMini").tap(function() {
            currentChordIndex = this.id;
            setArray();
            $.mobile.changePage("#mainPage");
        });
        context = canvas.getContext('2d');
        unitX = canvas.width/7;
        unitY = canvas.height/7;
    }
});