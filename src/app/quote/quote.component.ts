import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, "Don't stop when you are tired.Stop when you're done.", 'Wesley Snipes', new Date(2029, 7, 6)),
    new Quote(2, 'You can never cross the ocean until you have the courage to lose sight of the shore.', 'Christopher Columbus', new Date(2024, 11, 20)),
    new Quote(3, 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', 'Aristole', new Date(2021, 10, 30)),
    new Quote(4, "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.", 'Barbara Baron', new Date(2023, 12, 23)),
    new Quote(5, "If you continue to think the way you've always thought, you'll continue to get what you've always got.", 'Kelvin Trudeau', new Date(1999, 11, 1)),
    new Quote(6, 'Action may not always bring hapiness; but there is no happiness without action.', 'Benjamin Disraeli', new Date(2030, 4, 4)),
    new Quote(7, 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.', 'David Brinkley', new Date(2022, 3, 20)),
    new Quote(8, 'There are two ways of spreading light. To be the candle, or the mirror that reflects it.', 'Edith Wharton', new Date(2040, 12,25)),
  ];

  toggle = false;
  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete= confirm(`Please confirm if you want to delete ${this.quotes[index].name}?`)

      if(toDelete)
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(){

  }

}
