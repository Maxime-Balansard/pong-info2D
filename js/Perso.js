class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Dattebayo"
            ,"Un jour je deviendrai HoKage!"
            ,"NARUTO-KUN"
            ,"..."
            ,"même sakura fait mieux"
            ,"NARUUUTOOO"
            ,"SASUUUUKEEE"
           
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}