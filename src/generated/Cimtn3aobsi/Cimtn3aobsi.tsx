
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-imtn3aobsi',
  shadow: true,
})
export class Cimtn3aobsi {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  