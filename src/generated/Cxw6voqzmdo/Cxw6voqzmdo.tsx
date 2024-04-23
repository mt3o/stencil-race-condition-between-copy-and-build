
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-xw6voqzmdo',
  shadow: true,
})
export class Cxw6voqzmdo {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  